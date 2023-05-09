import getProduct from "@/lib/fetchData/getProduct";
import { redirect } from "next/navigation";
import Product from "./Product";
import Breadcrumbs from "@/ui/Include/BreadCrumb";
import Comment from "./Comment";
import ProductSection from "@/ui/Product/ProductSection";

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
    const paths=[
        {
          name:'Sản Phẩm',
          slug:'/products'
        },
        {
          name:product.name,
          slug:'#'
        }
      ]
    return ( 
        <section className="py-10"> 
            <Breadcrumbs paths={paths}/>
            <Product product={product} child={child}/>
            <ProductSection title="Tương Tự" about="Các sản phẩm tương tự" isSlider={false} show={4} />
        </section>
     );
}
