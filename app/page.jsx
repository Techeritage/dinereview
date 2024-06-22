import { risque } from "./ui/fonts";
import AdminLoginForm from "./ui/adminLoginForm";
import Image from "next/image";
export default function AdminPage() {
  return (
    <main className=" bg-green-600 h-screen">
      <div className="flex justify-center py-10 pb-14 pt-14">
        <Image src="/logo.svg" width={220} height={100} alt="logo" />
      </div>
      <section className="flex items-center justify-center">
        <AdminLoginForm />
      </section>
    </main>
  );
}
