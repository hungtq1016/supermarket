
import getCategories from "@/lib/fetchData/getCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default async function CategoriesList() {
    const categoriesData : Promise<any[]> = getCategories()
    
    const categories = await categoriesData
    
    return ( 
        <nav className="space-y-4">
            {
                categories.map((category)=>(
                    <div className="relative group" key={category.id}>
                        <div className="flex items-center justify-between bg-white">
                            <Link href={`/categories/${category.slug}`} className='hover:text-rose-600 text-lg'>{category.name}</Link>
                            {category.children.length != 0 && <FontAwesomeIcon icon={'angle-right'} className='mr-2 w-5 h-5'/>}
                        </div>
                        {category.children.length != 0 && 
                        <div className="hidden absolute top-0 right-0 translate-x-full shadow px-4 py-2 group-hover:flex flex-col gap-y-2 min-w-[200px] w-full bg-white z-[2] border">
                            {
                                category.children.map((child:any)=>{
                                    return(
                                        <Link href={`/categories/${child.slug}`} key={child.id} className='hover:text-rose-600'>{child.name}</Link>
                                    )
                                })
                            }
                        </div>
                        }
                    </div>
                ))
            }
        </nav>
     );
}