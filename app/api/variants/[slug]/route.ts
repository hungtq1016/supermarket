import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request:Request,{ params }: { params: { slug: string } }) {
   
    // assuming your body has json data
    const product:any = await prisma.variant.findUnique({
        where: {
            id:params.slug
        },
        select:{
            name:true,
            images:true,
            color:{
                select:{
                    name:true,
                    price:true,
                    discount:true,
                    hexCode:true,
                    quantity:true,
                }
            },
        },
    })
    return  NextResponse.json(product);
}