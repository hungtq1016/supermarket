import { TProduct } from '@/lib/type';
import getProducts from '@/lib/fetchData/getProducts';
import Breadcrumbs from '@/ui/Include/BreadCrumb';
import GridLayout from '@/ui/GridLayout';
import Navigator from '@/ui/Include/Navigator';

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
  const paths=[
    {
      name:'Tất Cả Sản Phẩm',
      slug:'#'
    }
  ]
  return (
    <section className='py-10'>
      <Breadcrumbs paths={paths}/>
      <div className='grid grid-cols-5'>
        {/* @ts-expect-error Async Server Component */}
        <Navigator />
        <GridLayout title={'Tất Cả Sản Phẩm'} products={variants}/>
      </div>
    </section>
  )
}
