'use client'

import {signIn, signOut, useSession} from 'next-auth/react';
function LoginWithGoogle() {

    // const {data:session} = useSession();

    // if (session) {
    
    //   return(
    //     <button onClick={()=> signOut()} type='button' className='py-2 px-4 w-full border-gray-600 border rounded-md flex justify-center gap-x-2 items-center'>
    //       <img src="/svg/google.svg" alt="svg-google-icon" className="w-5 h-5" />
    //       <span>Đăng xuat </span>
    //   </button>
    //   )
    // }else{
    //   return(
    //     <button onClick={()=> signIn()} type='button' className='py-2 px-4 w-full border-gray-600 border rounded-md flex justify-center gap-x-2 items-center'>
    //       <img src="/svg/google.svg" alt="svg-google-icon" className="w-5 h-5" />
    //       <span>Đăng Nhập Với Google</span>
    //   </button>
    //   )
    // }
    return(
      <button onClick={()=> signIn()} type='button' className='py-2 px-4 w-full border-gray-600 border rounded-md flex justify-center gap-x-2 items-center'>
        <img src="/svg/google.svg" alt="svg-google-icon" className="w-5 h-5" />
        <span>Đăng Nhap </span>
    </button>
    )
}

export default LoginWithGoogle;