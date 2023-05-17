import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request:Request) {
   
    const data = await prisma.wishlist.create({
        data:{
            variantId:'64512e2a0c4a22ae6268dfb4',
            emailUser:'hungtq1016@gmail.com'
        }
      })

      return  NextResponse.json({status:201,message:'Thành công'});

}

export async function DELETE(request:Request) {
    const res = await request.json();
    const data = await prisma.wishlist.delete({
       where:{
        id:res.id
       }
      })

      return  NextResponse.json({status:200,message:'Thành công'});

}
