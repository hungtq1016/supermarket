import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const products:any = await prisma.variant.findMany({
        select:{
            id:true,
            name:true,
            color:true
        },
        
    })
  
    return  NextResponse.json(products);
}

