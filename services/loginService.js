import { NextResponse } from "next/server";
import { signToken } from "@/lib/jwt";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function loginService(data) {
  const { username, password } = data;

  const user = await User.findOne({
    where: {
      username,
    },
  });

  if (!user) {
    return NextResponse.json(
      { error: "User tidak ditemukan" },
      { status: 401 },
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }

  const token = signToken({
    id: user.id,
    username: user.username,
  });

  const response = NextResponse.json({
    message: "Login berhasil",
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
