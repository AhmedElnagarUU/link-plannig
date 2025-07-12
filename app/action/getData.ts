"use server"
import { connectToDB } from "@/app/lib/db";
import Test from "@/app/model/Link";

export const getData = async (user: any) => {
  await connectToDB();

  const rawData = await Test.find({ createdBy: user.id }).lean();

  // Convert _id to string
  const data = rawData.map((item) => ({
    ...item,
    _id: item._id?.toString(),
    createdAt: item.createdAt?.toString(),
    updatedAt: item.updatedAt?.toString(),
  }));

  return data;
};
