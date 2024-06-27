import Hero from "@/app/ui/hero";
import FeaturedRestaurants from "@/app/ui/featuredRestaurants";
import CuisineSection from "@/app/ui/cuisineSection";
import ReviewForm from "@/app/ui/reviewForm";
import RecentReviews from "@/app/ui/recentReviews";
import { fetchReviews, getAllRestaurants } from "../lib/powerhouse";

export default async function UserPage() {
  const restaurants = await getAllRestaurants();
  const reviews = await fetchReviews();
  return (
    <main className="relative">
      <section>
        <Hero />
      </section>
      <section>
        <CuisineSection />
      </section>
      <section>
        <FeaturedRestaurants restaurants={restaurants} />
      </section>
      <section>
        <ReviewForm restaurants={restaurants} />
      </section>
      <section>
        <RecentReviews reviews={reviews} />
      </section>
      <section>
        <FeaturedRestaurants restaurants={restaurants} />
      </section>
    </main>
  );
}
