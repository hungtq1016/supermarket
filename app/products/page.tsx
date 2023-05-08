import CategoriesList from '@/ui/Include/CategoriesList';
import { TProduct } from '@/lib/type';
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
          id:variant.id,
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
  })
  
  return (
    <section className='py-10'>
      <div className='grid grid-cols-5'>
        {/* @ts-expect-error Async Server Component */}
        <CategoriesList />
        <Products products={variants}/>
      </div>
    </section>
  )
}
