"use server";
import { revalidatePath } from "next/cache";
import Test from "@/app/model/Link"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const addItem = async (formData: FormData) => {

    const title = formData.get("title");
    const description = formData.get("description");
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    console.log(user)


    await Test.create({
      title,
      description,
      createdBy: user?.id 
    });

    revalidatePath("/dashboard");
  };
