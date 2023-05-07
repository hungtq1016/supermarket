import getProduct from "@/lib/fetchData/getProduct";
import { redirect } from "next/navigation";
import Product from "./Product";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const [product] = await getProduct(params.slug)
    if (product) {
        return {
            title: product.name,
        };
    } else {
        redirect('/')
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const [product, child] = await getProduct(params.slug)
    
    return ( 
        <> 
            <Product product={product} child={child}/>
        </>
     );
}
