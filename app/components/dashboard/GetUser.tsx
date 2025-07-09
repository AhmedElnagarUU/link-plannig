import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



export default async function GetUser() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(`this is the user ${user}`)

}

