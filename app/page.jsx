import { risque } from "./ui/fonts";
import AdminLoginForm from "./ui/adminLoginForm";
export default function AdminPage() {
  return (
    <main className="bg-gray-50 h-screen">
      <h1 className={`${risque.className} md:text-3xl`}>DineReview</h1>
      <section className="flex p-20 items-center justify-center">
        <AdminLoginForm />
      </section>
    </main>
  );
}
