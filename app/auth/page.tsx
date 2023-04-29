import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library } from "@fortawesome/fontawesome-svg-core";
import LoginWithGoogle from "./Google";
library.add(fas)

function Page() {
    return ( 
        <>
            <div className="text-4xl font-medium text-center">
                Đăng Nhập
            </div>
            <form className="space-y-4 mt-6">
                <div className="flex flex-col gap-y-1 ">
                    <label htmlFor="email" className="text-lg font-medium">
                        Email 
                    </label>
                    <div className="flex">
                        <div className="flex items-center justify-center rounded-l-md border  border-gray-600 bg-gray-100 ">
                            <FontAwesomeIcon icon={'user'} className='w-4 h-4 px-4 text-gray-600'/>
                        </div>
                        <input type="email" name="email" id="email" placeholder="Nhập email tại đây"
                        className="border rounded-r-md py-2 pl-2 pr-4 w-full border-gray-600 border-l-0 focus:bg-gray-100 focus:ring-0 focus:outline-none hover:bg-gray-100 duration-500"/>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 ">
                    <label htmlFor="password" className="text-lg font-medium">
                        Mật Khẩu 
                    </label>
                    <div className="flex">
                        <div className="flex items-center justify-center rounded-l-md border  border-gray-600 bg-gray-100 ">
                            <FontAwesomeIcon icon={'lock'} className='w-4 h-4 px-4 text-gray-600'/>
                        </div>
                        <input type="password" name="password" id="password" placeholder="Nhập mật khẩu tại đây"
                        className="border rounded-r-md py-2 pl-2 pr-4 w-full border-gray-600 border-l-0 focus:bg-gray-100 focus:ring-0 focus:outline-none hover:bg-gray-100 duration-500"/>
                        
                    </div>
                </div>
                <div className="!mt-5">
                    <LoginWithGoogle/>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <button type="submit" className="py-2 px-4 bg-rose-600 text-gray-50 rounded-md hover:bg-rose-700 duration-500">Đăng Nhập</button>
                    <Link href={'/forget'} className='text-rose-600 text-sm font-medium hover:underline'>Quên Mật Khâu?</Link>
                </div>
                <div className="text-sm mt-4 text-center text-gray-600">
                    <span>Chưa có tài khoản?</span><Link href={'/auth/register'} className='text-gray-900 hover:underline duration-700 ml-2'> Đăng ký ngay</Link>
                </div>
            </form>
        </>
     );
}

export default Page;
