import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const products:any = await prisma.product.findMany({
        select:{
            sizes:true,
        },
        
    })
  
    return  NextResponse.json({data:products});
}

