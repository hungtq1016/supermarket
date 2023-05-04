import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons';

import GridLayout from '@/ui/GridLayout';
import CategoriesList from '@/ui/CategoriesList';
import Filter from './Filter';

import { TProduct } from '@/lib/type';
import getProducts from '@/lib/fetchData/getProducts';

export const metadata = {
  title: 'Tất Cả Sản Phẩm',
}

const sort =[
  { name: 'green', label: 'dsd'}
]

export default async function Products() {
  const productsData : Promise<TProduct[]> = getProducts()
    
  const products = await productsData
  
  return (
    <section className="py-5">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Tất cả sản phẩm</h1>
            <Filter/>
          </div>
          <div className='flex py-3 px-4 bg-gray-100 gap-x-2 items-center mt-4'>
            <span>Lọc | </span>
                {
                  sort.map((item,index)=>{
                    return (
                      <div key={index}
                        className='bg-white py-1 px-3 rounded-full flex items-center gap-x-1 group'
                      >
                        <span>{item.name}</span>
                        <button>
                          <FontAwesomeIcon icon={faX} className='w-3 h-3 text-gray-600 hidden group-hover:inline-block'/>
                        </button>
                      </div>
                    )
                  })
                }
            </div>                      
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Cateory */}
              <CategoriesList/>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <GridLayout isGrid={true} data={products}/>
              </div>
            </div>
          </section>
        </section>
  )
}
