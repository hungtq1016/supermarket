import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const products:any = await prisma.product.findMany({
        select:{
            id:true,
            name:true,
            slug:true,  
            image:true,
            detail:true,
            variants:{
                select:{
                    price:true,
                    count:true
                }
            }          
        },
        
    })
  
    return  NextResponse.json(products);
}

