import Header from "../ui/header";
import Hero from "@/app/ui/hero";
import FeaturedRestaurants from "@/app/ui/featuredRestaurants";
import  ReviewForm from "@/app/ui/reviewForm";
import { getAllUsers } from "@/app/lib/powerhouse";
import {getAllRestaurants} from "@/app/lib/powerhouse";

export default async function UserPage() {
  let userdata = null;
  let restaurantdata = null;
  let error = null;

  try {
    const res = await getAllUsers();
    const res2 = await getAllRestaurants();
    userdata = res?.data;
    restaurantdata = res2?.data;
  } catch (err) {
    console.log(err);
    error = err;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!userdata) {
    return <div>Loading...</div>;
  }

  return (
    <main className="relative">
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <FeaturedRestaurants restaurants={restaurantdata} />
      </section>
      <section>
        <ReviewForm restaurants={restaurantdata} />
      </section>
    </main>
  );
}
