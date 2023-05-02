import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const variants:any = await prisma.variant.findMany({
        select:{
            color:true
        }
    })
  
    return  NextResponse.json(variants);
}

