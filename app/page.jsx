import AdminLoginForm from "./ui/adminLoginForm";
import Image from "next/image";
export default function AdminPage() {
  return (
    <main className=" bg-green-600 h-screen">
      <div className="flex justify-center py-14 pb-12">
        <Image src="/logo.svg" width={220} height={100} alt="logo" />
      </div>
      <section className="flex items-center justify-center">
        <AdminLoginForm />
      </section>
    </main>
  );
}
