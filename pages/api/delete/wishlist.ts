import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res.status(200).json('test');
  }else{
    return res.status(200).json('123');

  }

//   try {
//     // const deleteUsers = await prisma.wishlist.deleteMany({
       
//     //   })
//     return res.status(200).json('test');
//   } catch (error) {
    
//     return res.status(400).json(error);
//   }
}
