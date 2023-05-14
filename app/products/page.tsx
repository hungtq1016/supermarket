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
        <GridLayout title={'Tất Cả Sản Phẩm'} products={products}/>
      </div>
    </section>
  )
}
