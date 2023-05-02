import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const products:any = await prisma.product.findMany({
        select:{
            id:true,
            name:true,
            desc:true,
            slug:true,  
            variants:true          
        },
        
    })
  
    return  NextResponse.json(products);
}

