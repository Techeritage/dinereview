import Header from "../ui/header";
import Hero from "@/app/ui/hero";
import FeaturedRestaurants from "@/app/ui/featuredRestaurants";
import  ReviewForm from "@/app/ui/reviewForm";
import { fetchReviews, getAllUsers } from "@/app/lib/powerhouse";
import RecentReviews from "@/app/ui/recentReviews";

export default async function UserPage() {
  let userdata = null;
  let reviewData = null;
  let error = null;

  try {
    const res = await getAllUsers();
    const res3 = await fetchReviews();
    userdata = res?.data;
    reviewData = res3?.data;
  } catch (err) {
    console.log(err);
    error = err;
  }

  if (error) {
    return <div>Error loading data</div>;
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
        <FeaturedRestaurants />
      </section>
      <section>
        <ReviewForm />
      </section>
      <section>
        <RecentReviews reviews={reviewData} />
      </section>
    </main>
  );
}
