"use server"
import Test from '@/app/model/Link'
import { revalidatePath } from 'next/cache'

export const   deletItem = async (formData:FormData) => {
    const id = formData.get('id')
    console.log(`this is data come from deletItem server action ${id}`)
    const data = await  Test.findOneAndDelete({_id:id})
    console.log(`this is data come from mongo in dele action====   ${data}`)
    revalidatePath('/dashboard')
}