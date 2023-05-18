import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

// export async function GET(request:Request,{ params }: { params: { slug: string } }) {
   
//     const { searchParams } = new URL(request.url);
//     const test = searchParams.get('test');
//     return  NextResponse.json(test);
// }


export async function POST(request:Request) {
   
    const { searchParams } = new URL(request.url);
    // const id = searchParams.get()
    // const data = await request.json();
    // return NextResponse.json({ res });
      return  NextResponse.json({searchParams});

}