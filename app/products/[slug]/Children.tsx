'use client'

import useChildren from "@/hook/useChildren";
import Image from "next/image";
import Link from "next/link";

export default function Children (props:any) {

    const children = props.child
    const id = props.id

    return ( 
        <section className="py-2">
            <div className="text-xl font-medium">Phiên bản khác</div>
            <div className="grid grid-cols-2 gap-x-1 mt-1">
            {children.map((child:any) => (
                    <Link href={`/products/${child.slug}`} key={child.id}>
                            <div className={`p-1 flex gap-x-1 border rounded-lg items-center hover:border-rose-600 duration-200 ${child.id == id && `border-rose-600`}`} >
                            <Image src={child.image.url} alt={child.image.alt} width={40} height={40}/>
                            <div className="text-sm text-gray-600">{child.name}</div>
                        </div>
                    </Link>
                ))}
        </div>
        </section>
     );
}
