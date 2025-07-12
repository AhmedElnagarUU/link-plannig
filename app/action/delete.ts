"use server"
import Test from '@/app/model/Link'
import { revalidatePath } from 'next/cache'

export const   deletItem = async (formData:FormData) => {
    const id = formData.get('id')
    
    const data = await  Test.findOneAndDelete({_id:id})
  
    revalidatePath('/dashboard')
}