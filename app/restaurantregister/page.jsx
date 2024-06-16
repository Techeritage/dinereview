import { risque } from "../ui/fonts";
import  RestaurantRegistrationForm from "../ui/restaurantRegistrationForm";
export default function RestaurantRegisterPage() {

  return (
    <main className="bg-gray-50 h-screen">
      <nav className="bg-white border-b px-[10%] py-3">
        <h1 className={`${risque.className} md:text-3xl`}>
          DineReview
        </h1>
      </nav>
      <section className="flex p-20 items-center justify-center">
        <RestaurantRegistrationForm />
      </section>
    </main>
  );
}
