import prisma  from '@/lib/prismadb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function GET() {
    const data = 'test';
  
    return NextResponse.json({ data })
}

export async function POST(req : Request){
    const body = await req.json()
    const {email,name,password} = body
    const hashedPassword = await bcrypt.hash(password,12);


    const user = await prisma.user.create({
        data:{
            email,
            name,
            hashedPassword
        }
    })
    console.log('====================================');
    console.log('sadasdcls');
    console.log('====================================');
    return NextResponse.json(user)
}