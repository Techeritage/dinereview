"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { registerNewUser } from "@/app/lib/powerhouse";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { SyncLoader } from "react-spinners";
import Image from "next/image";

export default function UserRegistrationForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(true); // State for handling errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic client-side validation
    if (!email || !password || !name) {
      setError("All fields info are required.");
      setLoading(false);
      return;
    }

    // Assuming you have structured response handling in handleSubmit
    try {
      const res = await registerNewUser(name, email, password);

      if (res?.status === 200) {
        // Handle success case
        setLoading(false);
        setSuccess(true);
        console.log("Registration successful");
        setTimeout(() => {
          router.push("/");
        }, 5000); // Redirect after 3 seconds
      } else {
        setError(res.error); // Handle error from backend
        setLoading(false);
        console.log("Error detected");
        return;
      }
    } catch (error) {
      console.error("Registration error:", error);
      setLoading(false);
      setError("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="w-full mx-[3%] md:w-[400px] py-7 px-5 bg-white rounded-2xl shadow-md">
      {success && (
        <div className="absolute z-10 top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-black/70">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/success1.gif"
              unoptimized
              width={150}
              height={200}
              alt="success gif"
              className="rounded-full h-[150px] object-cover"
            />
            <h2 className="text-white mt-7 text-center font-semibold text-2xl">Registration successful</h2>
            <p className="text-white text-center mt-1">Redirecting to login page...</p>
          </div>
        </div>
      )}
      <h2 className={`text-2xl text-green-600 font-bold text-center mb-10`}>
        Register for an Account
      </h2>
      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
      )}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-box"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && (
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-[#555555] right-3 top-[50%] translate-y-[-50%] cursor-pointer"
            >
              {showPassword ? (
                <EyeSlashIcon width={20} />
              ) : (
                <EyeIcon width={20} />
              )}
            </span>
          )}
        </div>
        <button type="submit" className="submit-btn text-white">
          {loading ? (
            <div>
              <SyncLoader color="white" size={7} />
            </div>
          ) : (
            <span>Register</span>
          )}
        </button>
      </form>
      <div className="text-center text-black text-sm mt-7">
        Already have an account?
        <span className="text-myGreen">
          <Link href="/"> login here</Link>
        </span>
      </div>
    </div>
  );
}
