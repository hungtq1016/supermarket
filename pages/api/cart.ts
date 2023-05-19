import prisma from '@/lib/prismadb';
import { NextApiRequest,NextApiResponse } from 'next'
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const method = req.method
    switch (method) {
        case 'POST':
            try {
                const cart =req.body
                
                await prisma.cart.create({
                    data:{
                        name:cart.name,
                        address:cart.address,
                        city:cart.city,
                        email:cart.email,
                        phone:cart.phone,
                        status:cart.status,
                        total:Number.parseInt(cart.total)
                    }
                })
        
                return res.status(201).json({message:'Thanh cong'})
            } catch (error) {                
                return res.status(400).end()
            }
            break;
        default:
            return res.status(405).end();
            break;
    }

};