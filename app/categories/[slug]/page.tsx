import getCategory from "@/lib/fetchData/getCategory";
import { redirect } from "next/navigation";
import Category from "./Category";
import CategoriesList from "@/ui/Include/CategoriesList";
import Breadcrumbs from "@/ui/Include/BreadCrumb";

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

    product.variants.map((variant: any) => {

      return variants.push(
        {
          id: variant.id,
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
        <Breadcrumbs paths={paths} className='pb-10'/>
      <div className='grid grid-cols-5 pt-10'>
        {/* @ts-expect-error Async Server Component */}
        <CategoriesList />
        <Category category={category} products={variants} />
      </div>
    </section>
  )
}
