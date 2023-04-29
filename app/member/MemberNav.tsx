import { Nav } from "@/lib/interface";
import Link from "next/link";

const navbar:Array<Nav> = [
    {
        title:'Tổng Quan',
        slug: '',
        subNav:[]
    },
    {
        title:'Tài Khoản',
        slug:'account',
        subNav:[
            {
                title:'Trang Cá Nhân',
                slug:'profile',
            },
            {
                title:'Địa Chỉ Giao Hàng',
                slug:'address',
            },
            {
                title:'Thanh Toán',
                slug:'payment',
            }
        ]
    },
    {
        title:'Đơn Hàng',
        slug:'order',
        subNav:[
            {
                title:'Đang Vận Chuyển',
                slug:'shipping',
            },
            {
                title:'Đã Thanh Toán',
                slug:'paid',
            },
            {
                title:'Hoàn Trả',
                slug:'return',
            },
            {
                title:'Hủy Đơn',
                slug:'cancel',
            }
        ]
    },
    {
        title:'Yêu Thích',
        slug:'wishlist',
        subNav:[]
    }
]

function DropDown(nav:any){
    return (
        <Link href={`/member/${nav.slug}`}>
            <div className="font-medium">{nav.title}</div>
            <div className="ml-6 py-2 space-y-2">
                {nav.subNav.map((item:Nav)=>(
                    <Link href={`/member/${nav.slug}/${item.slug}`}>
                        <div className="text-gray-600 hover:text-rose-600">{item.title}</div>
                    </Link>
                ))}
            </div>
        </Link>
    )
}

function MemberNavbar() {
    return ( 
        <>
            {navbar.map((navItem,index)=>(
                <DropDown key={index} {...navItem}/>
            ))}
        </>
     );
}

export default MemberNavbar;