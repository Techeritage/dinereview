import Hero from "@/app/ui/hero";
import FeaturedRestaurants from "@/app/ui/featuredRestaurants";
import  ReviewForm from "@/app/ui/reviewForm";
import RecentReviews from "@/app/ui/recentReviews";



export default async function UserPage() {
  return (
    <main className="relative">
      <section>
        <Hero />
      </section>
      <section>
        <FeaturedRestaurants />
      </section>
      <section>
        <ReviewForm/>
      </section>
      <section>
        <RecentReviews />
      </section>
    </main>
  );
}
