import { TProduct } from '@/lib/type';
import getProducts from '@/lib/fetchData/getProducts';
import Breadcrumbs from '@/ui/Include/BreadCrumb';
import GridLayout from '@/ui/GridLayout';
import Navigator from '@/ui/Include/Navigator';

export const metadata = {
  title: 'Tất Cả Sản Phẩm',
}

export default async function Page() {
  const productsData : Promise<any[]> = getProducts()
    
  const products = await productsData
  console.log(products);
  
  const variants: Array<any> = []

  products?.map((product: any) => {
    product?.variants?.map((variant: any) => {
      return variants.push(
        {
          id: variant.id,
          price: variant.price,
          discount: variant.discount,
          quantity: variant.quantity,
          count: variant.count,
          color: variant.color.name,
          image: variant.images.shift(),
          name: product.name,
          detail: product.detail,
          slug: product.slug
        }
      )
    }
    )
  })
  console.log(variants);

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
