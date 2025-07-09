import PublicURL from "@/app/components/dashboard/PublicURL";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Url() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
   
   

    return(
        <PublicURL user= {user?.email}/>
    )
}