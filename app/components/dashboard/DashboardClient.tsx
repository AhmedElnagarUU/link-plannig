"use client"
import { addItem } from "@/app/action/addData";
import  {deletItem} from '@/app/action/delete'
import { getData } from "@/app/action/getData";
import EditForm from "@/app/components/dashboard/EditForm"

import { useEffect, useState } from "react";


export default  function DashboardPage({ user }: { user: any }) {

  
  
  const [edit , setEdit] = useState<[] | null>(null)
  const [links , setLinks] = useState<any[]>([])
  const [error , setError] = useState<unknown | null>(null)
  

  useEffect(()=>{

    const fetchdata = async () =>{
      const links = await getData(user)
      setLinks(links)
    }
    
    fetchdata()
  },[])
  
  const handleEdit = (link:any)=>{
    setEdit(link)

    
    console.log(edit)
  }

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-6 flex items-center justify-center">
      {edit && (<EditForm data={edit} state={setEdit}/>)}
      <div className="w-full max-w-xl bg-gray-850 border border-gray-700 rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-3xl font-bold text-white">Create New Item</h2>
          <p className="text-sm text-gray-400">
            Hello {user?.name || "friend"}, add a new item to your list
          </p>
        </div>

        <form action={async(f)=>{
          try{
          await addItem(f)
          const links = await getData(user)
          setLinks(links)
          }catch(err){
            setError(err)
          }
        }
          } className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              required
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              rows={3}
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Your Items</h3>
          <div className="space-y-2">
            {links.length === 0 ? (
              <p className="text-gray-400">No items yet.</p>
            ) : (
              links.map((link: any) => (
                <div
                key={link._id}
                className="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-blue-500 transition"
              >
                <form >
                  <input hidden  name="id" value={link._id} readOnly/>
                <h4 className="text-white font-medium">{link.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{link.description}</p>
                
                <div className="flex gap-2">
                  <button 
                  type="button"
                  onClick={()=>handleEdit(link)}
                    className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-1 transition"
                  >
                    ✏️ Edit
                  </button>
              
                  <button formAction ={async (f)=>{
                    try{
                    await deletItem(f)
                    const links = await getData(user)
                    setLinks(links)
                    }catch(err){
                      setError(err)
                    }
                  }}
                    className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-1 transition"
                  >
                    ❌ Delete
                  </button>
                </div>
                </form>
              </div>
              
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
