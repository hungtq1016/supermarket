import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons';

import GridLayout from '@/ui/GridLayout';
import CategoriesList from '@/ui/CategoriesList';
import { TProduct } from '@/lib/type';
import getProducts from '@/lib/fetchData/getProducts';
import Products from './Products';

export const metadata = {
  title: 'Tất Cả Sản Phẩm',
}

export default async function Page() {
  const productsData : Promise<TProduct[]> = getProducts()
    
  const products = await productsData
  
  return (
    <>
      <Products products={products}/>
    </>
  )
}
