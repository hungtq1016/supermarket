
import { Nav } from "@/lib/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const navigations : Array<Nav>  = [
    {
        title:'Thời Trang Nam',
        slug:'/categories/men-fashion',
        subNav:[
            {
                title:"Quần",
                slug:'/categories/pant'
            },
            {
                title:"Áo",
                slug:'/categories/shirt'
            },
        ]
    },
    {
        title:"Điện Thoại",
        slug:'/categories/cell-phone'
    },
    {
        title:"Máy Tính",
        slug:'/categories/computer'
    },
    {
        title:"Laptop",
        slug:'/categories/laptop'
    },
    {
        title:"Màn Hình",
        slug:'/categories/monitor'
    }
]

function CategoriesList() {

    return ( 
        <section className="space-y-4">
            {
                navigations.map((nav:Nav,index)=>(
                    <div className="relative group" key={index}>
                        <div className="flex items-center justify-between bg-white">
                            <Link href={nav.slug} className='hover:text-rose-600 text-lg'>{nav.title}</Link>
                            {nav.subNav && <FontAwesomeIcon icon={'angle-right'} className='mr-2 w-5 h-5'/>}
                        </div>
                        {nav.subNav && 
                        <div className="hidden absolute top-0 right-0 translate-x-full shadow px-4 py-2 group-hover:flex flex-col gap-y-2 min-w-[200px] w-full bg-white z-[2] border">
                            {nav.subNav.map((subNav,index)=>(
                                <Link href={subNav.slug} key={index} className='hover:text-rose-600'>{subNav.title}</Link>
                            ))}
                        </div>
                        }
                    </div>
                ))
            }
        </section>
     );
}

export default CategoriesList;