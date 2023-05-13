import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const method = searchParams.get('method');
    const limit = searchParams.get('limit');

    const limitNumber = limit != null ? parseInt(limit) : 4;
    var products:any 
    switch (method) {
        case 'sale':
            products = await prisma.variant.findMany({
                take:limitNumber,
                include: {
                    product: true,
                },
                orderBy:{
                    discount:'desc'
                }
            })
            break;
    
        default:
            products =  await prisma.product.findMany({
                select:{
                    id:true,
                    name:true,
                    slug:true,  
                    image:true,
                    detail:true,
                    variants:{
                        select:{
                            id:true,
                            price:true,
                            discount:true,
                            quantity:true,
                            count:true,
                            color: {
                                select:{
                                    id:true,
                                    name:true,
                                }
                            },
                            images: true,
                        }
                    }     
                }
            })
            break;
    }
    
  
    return  NextResponse.json(products);
}

