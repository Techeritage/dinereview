import Header from "../ui/header";
import Hero from "@/app/ui/hero";
import FeaturedRestaurants from "@/app/ui/featuredRestaurants";

export default function UserPage() {
  return (
    <main>
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <FeaturedRestaurants />
      </section>
    </main>
  );
}
