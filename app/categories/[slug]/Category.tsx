
import GridLayout from '@/ui/GridLayout';
import CategoriesList from '@/ui/Include/CategoriesList';
import ViewBy from '@/ui/Product/ViewBy';
import Filter from '@/ui/Product/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const sort =[
  { name: 'green', label: 'dsd'}
]

export default async function Category(props:any) {
    return (
        <section className="py-5">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-4">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">{props.category.name}</h1>
                <div className="flex items-center gap-x-3">
                    <Filter />
                    <ViewBy />
                </div>
            </div>
            <div className='flex py-3 px-4 bg-gray-100 gap-x-2 items-center mt-4'>
                <span>Lọc | </span>
                {
                    sort.map((item, index) => {
                        return (
                            <div key={index}
                                className='bg-white py-1 px-3 rounded-full flex items-center gap-x-1 group'
                            >
                                <span>{item.name}</span>
                                <button>
                                    <FontAwesomeIcon icon={'x'} className='w-3 h-3 text-gray-600 hidden group-hover:inline-block' />
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
                    {/* @ts-expect-error Async Server Component */}
                    <CategoriesList />

                    {/* Product grid */}
                    <div className="lg:col-span-3">
                        <GridLayout isGrid={true} data={props.variants} />
                    </div>
                </div>
            </section>
        </section>
    )
};
