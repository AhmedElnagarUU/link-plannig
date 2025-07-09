// app/u/[username]/page.tsx
import { connectToDB } from '@/app/lib/db';
import UserProfile from '@/app/model/UserProfile';
import Test from '@/app/model/Link'; // your model
import { notFound } from 'next/navigation';

export default async function PublicPage({ params }: { params: { urlName: string } }) {
  await connectToDB();

  const profile = await UserProfile.findOne({ urlName: params.urlName });
  if (!profile) return notFound();

  const data = await Test.find({ createdBy: profile.userId });
  console.log(`this is data come from dynamic url ${data}`)
  const {urlName} = await params

  
  return (<div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-10">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400">
        @{urlName}'s Public Page
      </h1>
  
      {data.length === 0 ? (
        <p className="text-center text-gray-400">No public items to show yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.map((item: any) => (
            <div
              key={item._id}
              className="bg-gray-850 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500 transition"
            >
              <h2 className="text-2xl font-semibold text-blue-300 mb-2">{item.title}</h2>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  
  );
}
