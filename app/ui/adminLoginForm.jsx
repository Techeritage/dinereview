"use client";
import Link from "next/link";
import { risque } from "./fonts";
import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for handling errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        // Handle sign-in error
        setError("Invalid credentials. Please try again.");
        console.error("Sign-in failed:", result.error);
        return;
      } else {
        const session = await getSession();
        console.log(session);
        // Fetch session to get the role
        if (session?.user) {
          const role = session.user.role;
          if (role === "admin") {
            router.push("/admin/dashboard");
          } else if (role === "restaurant") {
            router.push("/restaurant");
          } else {
            router.push("/user");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-w-[400px] p-5 bg-white min-h-[400px] rounded-2xl shadow-md">
      <h2 className={`${risque.className} text-4xl font-bold text-center mb-7`}>
        Login
      </h2>
      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
      )}
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input-box"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-box"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn text-white mt-10">
          Login
        </button>
      </form>
      <div className="text-center text-black text-sm mt-3">
        Yet to have an account?
        <span className="text-myGreen">
          <Link href="/register"> register here</Link>
        </span>
      </div>
    </div>
  );
}
