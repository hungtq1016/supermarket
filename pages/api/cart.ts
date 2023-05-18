import prisma from '@/lib/prismadb';
import { NextApiRequest,NextApiResponse } from 'next'
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const method = req.method
    switch (method) {
        case 'POST':
            try {
                const dataPost =req.body
                await prisma.cart.create({
                    data:{
                        name : dataPost.name,
                        email : dataPost.email,
                        address : dataPost.address,
                        city : dataPost.city,
                        phone : dataPost.phone,
                        status : dataPost.status,
                        total : dataPost.total,
                    }
                })
        
                return res.status(201).json({message:'Thành Công'})
            } catch (error) {
                return res.status(400).end()
            }
            break;
        default:
            return res.status(405).end();
            break;
    }

};