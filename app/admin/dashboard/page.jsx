import DashboardInsight from "@/app/ui/dashboardInsight";
import UserTable from "@/app/ui/userTable";
import RestaurantTable from "@/app/ui/restaurantTable";
import ReviewTable from "@/app/ui/reviewTable";

export default async function AdminDashboardPage() {
  return (
    <main className="pb-10">
      <section>
        <DashboardInsight />
      </section>
      <section className="mt-10 mr-3">
        <UserTable />
      </section>
      <section className="mt-10 mr-3">
        <ReviewTable />
      </section>
      <section className="mt-10 mr-3">
        <RestaurantTable />
      </section>
    </main>
  );
}
