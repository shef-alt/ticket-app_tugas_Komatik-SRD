"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        return;
      }

      router.push("/");
    } catch (err) {
      console.error(err);
      setError("Terjadi error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-full items-center justify-center relative">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-2.5 w-75 top-40 absolute"
      >
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="bg-indigo p-2.5 rounded-full"></div>
          <h1 className="text-7xl text-indigo font-bold">Tiketku</h1>
        </div>

        <h3 className="text-center text-xl text-indigo font-bold">
          Login to Your Account
        </h3>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-slate-100 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-slate-100 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-indigo text-slate-100 p-2 text-lg hover:bg-indigo-600"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
