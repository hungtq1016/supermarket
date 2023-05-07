import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request:Request,{ params }: { params: { slug: string } }) {

    const category:any = await prisma.category.findUnique({
        where: {
            slug:params.slug
        },
        select:{
            id:true,
            name:true,
            slug:true,  
            image:true,
            children:true,
            products:{
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
                            color: true,
                            images: true,
                        }
                    }          
                },
            },
            
        },
        
    })
  
    return  NextResponse.json(category);
}

