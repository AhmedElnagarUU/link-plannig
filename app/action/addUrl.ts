"use server"
import crypto from 'crypto'
import UserProfile from '@/app/model/UserProfile'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export const addURLName = async () => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    const urlName = crypto.randomUUID().split("-")[0]
    console.log(`this user in client side ${user?.id}`)
    console.log(`this uiniq URL ${urlName}`)



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