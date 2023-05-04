import AddressBar from "@/ui/AddressBar";
import getProduct from '@/lib/fetchData/getProduct';
import { TProduct } from "@/lib/type";
// export const metadata = {
//   title: 'Liên Hệ',
// }
export async function generateMetadata({ params}: { params: { slug: string }}) {
  const productData : Promise<TProduct> = getProduct('dualsense-wireless-controller')
    
    const product = await productData
  return {
    title: product.name,
  };
}
export default async function Contact() {
    
    const productData : Promise<TProduct> = getProduct('dualsense-wireless-controller')
    
    const product = await productData
    
    return ( 
        <>
        <AddressBar/>
        <div>
          {
           product.name
          }
        </div>
       </>
     );
}