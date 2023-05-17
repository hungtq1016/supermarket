import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

// export async function GET(request:Request,{ params }: { params: { slug: string } }) {
   
//     const { searchParams } = new URL(request.url);
//     const test = searchParams.get('test');
//     return  NextResponse.json(test);
// }


export async function DELETE(request:Request) {
   
    const deleteWishList = await prisma.wishlist.deleteMany({
        where: {
            emailUser:'hungtq1016@gmail.com'
        },
      })

      return  NextResponse.json({deleteWishList});

}