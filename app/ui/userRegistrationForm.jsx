"use client";
import Link from "next/link";
import { risque } from "./fonts";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerNewUser } from "@/app/lib/powerhouse";

export default function UserRegistrationForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for handling errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!email || !password || !name) {
      setError("All fields info are required.");
      return;
    }

    try {
      const result = await registerNewUser(name, email, password);
      if (result?.error) {
        // Handle sign-in error
        setError("User already exist.");
        console.error("Sign-in failed:", result.error);
        return;
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-w-[400px] p-5 bg-white min-h-[400px] rounded-2xl shadow-md">
      <h2 className={`${risque.className} text-4xl font-bold text-center mb-7`}>
        Register
      </h2>
      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
      )}
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fullname"
          name="name"
          className="input-box"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          Register
        </button>
      </form>
      <div className="text-center text-black text-sm mt-3">
        Already have an account?
        <span className="text-myGreen">
          <Link href="/"> login here</Link>
        </span>
      </div>
    </div>
  );
}
