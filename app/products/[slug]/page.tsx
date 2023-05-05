import getProduct from "@/lib/fetchData/getProduct";
import { TProduct } from "@/lib/type";
import { redirect } from "next/navigation";
import Product from "./Product";

export async function generateMetadata({ params}: { params: { slug: string }}) {
    const productData : Promise<TProduct> = getProduct(params.slug)
      
    const product = await productData
    if (product) {
        return {
            title: product.name,
          };
    }else{
        redirect('/')
    }
    
  }

export default async function Page({ params }: { params: { slug: string } }) {
    const productData : Promise<TProduct> = getProduct(params.slug)
    
    const product = await productData
    return ( 
        <> 
            <Product product={product}/>
        </>
     );
}
