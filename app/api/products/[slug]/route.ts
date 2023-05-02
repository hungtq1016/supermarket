import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request:Request,{ params }: { params: { slug: string } }) {
   
    // assuming your body has json data
    const product:any = await prisma.product.findUnique({
        where: {
            slug: params.slug,
        },
        select:{
            id:true,
            name:true,
            desc:true,
            slug:true,
            variants:true
        },
    })
    return  NextResponse.json(product);
}