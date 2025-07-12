"use server"
import Test from "@/app/model/Link"


export const editData = async (formData : FormData)=>{

    const id = formData.get('id')
    const title = formData.get('title')
    const description = formData.get('description')


    await Test.findByIdAndUpdate(
        id,
        {title,description}
    )



}