import prisma from '@/lib/prismadb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const users:any = await prisma.user.findMany({
        select: {
            name: true,
            email: true
         }
    })
  
    return  NextResponse.json({data:users});
}

// export async function POST(request: Request) {

//     const data = await request.json();
//     const { name, email, password } = data
//     const hashedPassword = await bcrypt.hash(password,12);
//         const user =  await prisma.user.create({
//             data:{
//                 email,name,hashedPassword
//             }
//         })
  
//     return NextResponse.json({ data:data })
// }
