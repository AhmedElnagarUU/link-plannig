import { editData } from "@/app/action/editData";
import { useState } from "react";


type Props = {
    state: (arg : [] | null) => void;
  };

export default function Editform({state , data} : {
    state: (arg : [] | null) => void;
    data : any
  }  ) {
    const [newTitle ,  setNewTitle] = useState(data.title)
    const [newDescription ,  setNewDescription] = useState(data.description)
    console.log(`this is data come to editform ${data._id}`)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl rounded-2xl w-full max-w-md p-6 text-white relative">
          
          <button
            type="button"
            onClick={()=>state(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          >
            ❌
          </button>
  
          <h2 className="text-2xl font-bold text-center mb-4">
            ✏️ Edit Your Item
          </h2>
  
          <form action={editData} className="space-y-4">
            <div>
                <input name='id' value={data._id} hidden readOnly/>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                📝 Title
              </label>
              <input
                name="title"
                type="text"
                value={newTitle}
                onChange={(e)=>{
                    const newtitle = e.target.value
                    setNewTitle(newtitle)
                    console.log(`this is the new title ${newtitle}`)
                }}
                
                placeholder="Enter new title..."
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                📄 Description
              </label>
              <textarea
                name="description"
                rows={4}
                value={newDescription}
                onChange={(e)=>{
                   const newDescription = e.target.value
                   setNewDescription(newDescription)
                }}
                placeholder="Update description..."
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-blue-500/50"
            >
              💾 Save Changes
            </button>
          </form>
        </div>
      </div>
    );
  }
  