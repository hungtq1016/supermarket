import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request:Request,{ params }: { params: { slug: string } }) {
   
    // assuming your body has json data
    const product:any = await prisma.product.findUnique({
        where: {
            slug:params.slug
        },
        select:{
            id:true,
            name:true,
            detail:true,
            slug:true,
            parentId:true,
            variants:{
                select:{
                    id:true,
                    price:true,
                    discount:true,
                    quantity:true,
                    count:true,
                    color:true,
                    comments:{
                        select:{
                            id:true,
                            comment:true,
                            rating:true,
                            createdAt:true,
                            user:{
                                select:{
                                    name:true,
                                }
                            }
                        }
                    },
                    images:{
                        select:{
                            id:true,
                            url:true,
                            alt:true
                        }
                    },

                }
            }
        },
    })
    return  NextResponse.json(product);
}