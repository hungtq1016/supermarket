import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons';

import GridLayout from '@/ui/GridLayout';
import CategoriesList from '@/ui/CategoriesList';
import { TProduct, TVariant } from '@/lib/type';
import getProducts from '@/lib/fetchData/getProducts';
import Products from './Products';

export const metadata = {
  title: 'Tất Cả Sản Phẩm',
}

export default async function Page() {
  const productsData : Promise<TProduct[]> = getProducts()
    
  const products = await productsData
  
  const variants:Array<any> = []
  products.map((product)=>{
    
    product.variants.map(variant => {
      
      return variants.push(
        {
          price: variant.price,
          discount: variant.discount,
          quantity: variant.quantity,
          count: variant.count,
          color: variant.color,
          images: variant.images,
          name: product.name,
          detail: product.detail,
          slug: product.slug
        }
      )
    }            
    )
    console.log(variants);
    
  })
  
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Products products={variants}/>
    </>
  )
}
