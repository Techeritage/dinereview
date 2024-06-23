import Image from "next/image";
import UserRegistrationForm from "../ui/userRegistrationForm";
export default function RegisterPage() {
  return (
    <main className=" bg-green-600 h-screen">
      <div className="flex justify-center py-14 pb-12">
        <Image src="/logo.svg" width={220} height={100} alt="logo" />
      </div>
      <section className="flex items-center justify-center">
        <UserRegistrationForm />
      </section>
    </main>
  );
}
