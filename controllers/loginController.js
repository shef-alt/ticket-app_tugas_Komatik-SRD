import { NextResponse } from "next/server";
import { loginService } from "../services/loginService";
import { z } from "zod";
import { RateLimiterMemory } from "rate-limiter-flexible";

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60,
});

export async function loginController(req) {
  try {
    try {
      const ip = req.headers.get("x-forwarded-for") || "unknown";
      await rateLimiter.consume(ip);
    } catch {
      return NextResponse.json(
        {
          error: "Terlalu banyak request! Coba lagi nanti",
        },
        {
          status: 429,
        },
      );
    }

    const body = await req.json();

    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: result.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    const loginResult = await loginService(result.data);

    return loginResult;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
