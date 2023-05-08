import getCategory from "@/lib/fetchData/getCategory";
import { redirect } from "next/navigation";
import Category from "./Category";

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
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Category category={category} variants={variants} />
    </>
  )
}
