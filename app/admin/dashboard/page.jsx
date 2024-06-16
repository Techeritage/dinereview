import DashboardInsight from "@/app/ui/dashboardInsight";
import { getAllUsers } from "@/app/lib/powerhouse";
import {getAllRestaurants} from "@/app/lib/powerhouse";
import UserTable from "@/app/ui/userTable";
import RestaurantTable from "@/app/ui/restaurantTable";

export default async function AdminDashboardPage() {
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
    <main className="pb-10">
      <section>
        <DashboardInsight userData={userdata} restaurants={restaurantdata} />
      </section>
      <section className="mt-10 mr-3">
        <UserTable users={userdata}  />
      </section>
      <section className="mt-10 mr-3">
        <RestaurantTable restaurants={restaurantdata} />
      </section>
    </main>
  );
}
