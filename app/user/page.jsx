import Hero from "@/app/ui/hero";
import FeaturedRestaurants from "@/app/ui/featuredRestaurants";
import ReviewForm from "@/app/ui/reviewForm";
import RecentReviews from "@/app/ui/recentReviews";
import { getAllRestaurants } from "../lib/powerhouse";

export default async function UserPage() {
  const data = await getAllRestaurants();

  const res = data.data;
  return (
    <main className="relative">
      <div>
        {res.map((dat) => (
          <p>{dat.name}</p>
        ))}
      </div>
      <section>
        <Hero />
      </section>
      <section>
        <FeaturedRestaurants />
      </section>
      <section>
        <ReviewForm />
      </section>
      <section>
        <RecentReviews />
      </section>
    </main>
  );
}
