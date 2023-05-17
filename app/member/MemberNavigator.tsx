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
                slug:'?filter=doing',
            },
            {
                title:'Đã Thanh Toán',
                slug:'?filter=done',
            },
            {
                title:'Hoàn Trả',
                slug:'?filter=back',
            },
            {
                title:'Hủy Đơn',
                slug:'?filter=cancel',
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
        <div>
            <Link className="font-semibold" href={`/member/${nav.slug}`}>{nav.title}</Link>
            <div className="ml-6 py-2 space-y-2">
                {nav.subNav.map((item:Nav,index:number)=>(
                    <Link href={`/member/${nav.slug+item.slug}`} key={index}>
                        <div className="text-gray-600 hover:text-rose-600">{item.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default function MemberNavigator() {
    return ( 
        <>
            {navbar.map((navItem,index)=>(
                <DropDown key={index} {...navItem}/>
            ))}
        </>
     );
}