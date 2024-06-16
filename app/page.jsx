import { risque } from "./ui/fonts";
import AdminLoginForm from "./ui/adminLoginForm";
export default function AdminPage() {

  return (
    <main className="bg-gray-50 h-screen">
      <nav className="bg-white border-b px-[10%] py-3">
        <h1 className={`${risque.className} md:text-3xl`}>
          DineReview
        </h1>
      </nav>
      <section className="flex p-20 items-center justify-center">
        <AdminLoginForm />
      </section>
    </main>
  );
}
