"use server"
import UserProfile from '@/app/model/UserProfile'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export const addURLName = async (formData : FormData) => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    console.log(`this user in client side ${user?.id}`)
    const urlName = formData.get('urlName')


    if(!await UserProfile.findOne({userId:user?.id})){
        await UserProfile.create({
        userId : user?.id,
        urlName,
    }) 
    } else {
    const existUser = await UserProfile.findOne({userId: user?.id})
    existUser.urlName = urlName
    await existUser.save()

    }


      console.log(`this come from client URL / ${urlName}`)

}