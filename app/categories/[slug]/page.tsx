import getCategory from "@/lib/fetchData/getCategory";
import { redirect } from "next/navigation";
import Breadcrumbs from "@/ui/Include/BreadCrumb";
import GridLayout from "@/ui/GridLayout";
import Navigator from "@/ui/Include/Navigator";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const categoryData : Promise<any> = getCategory(params.slug)
    
  const category = await categoryData

  if (category) {
      return {
          title: category.name,
      };
  } else {
      redirect('/')
  }
}

export default async function Page({ params }: { params: { slug: string } }) {

  const categoryData: Promise<any> = getCategory(params.slug)

  const category = await categoryData
  const variants: Array<any> = []
  category?.products?.map((product: any) => {

    product?.variants?.map((variant: any) => {
      return variants.push(
        {
          id: variant.id,
          price: variant.price,
          discount: variant.discount,
          quantity: variant.quantity,
          count: variant.count,
          color: variant.color,
          image: variant.images.shift(),
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
      name:'Thể Loại',
      slug:'/categories'
    },
    {
      name:category.name,
      slug:'#'
    }
  ]
  return (

    <section className='py-10'>
        <Breadcrumbs paths={paths}/>
      <div className='grid grid-cols-5 pt-10'>
        {/* @ts-expect-error Async Server Component */}
        <Navigator />
        {/* <Category category={category} products={variants} /> */}
        <GridLayout title={category.name} products={variants}/>

      </div>
    </section>
  )
}
