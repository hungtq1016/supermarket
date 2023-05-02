import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request:Request,{ params }: { params: { slug: string } }) {
   
    // assuming your body has json data
    const product:any = await prisma.variant.findUnique({
        where: {
            productId:params.slug
        },
        select:{
            color:true,
            discount:true,
            images:true
        },
    })
    return  NextResponse.json(product);
}