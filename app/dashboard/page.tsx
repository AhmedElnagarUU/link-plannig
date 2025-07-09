// app/dashboard/page.tsx
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import DashboardPage from "@/app/components/dashboard/DashboardClient";

export default async function DashboardWrapper() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user)

  return <DashboardPage user={user} />;
}
