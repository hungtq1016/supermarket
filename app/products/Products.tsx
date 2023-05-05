'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGrip, faList, faX, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import GridLayout from '@/ui/GridLayout';
import CategoriesList from '@/ui/CategoriesList';
import { TProduct } from '@/lib/type'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const sort = [
  { name: 'green', label: 'dsd' }
]

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const colors = [
  { value: 'white', label: 'White', checked: false },
  { value: 'beige', label: 'Beige', checked: false },
  { value: 'blue', label: 'Blue', checked: true },
  { value: 'brown', label: 'Brown', checked: false },
  { value: 'green', label: 'Green', checked: false },
  { value: 'purple', label: 'Purple', checked: false },
]

export default function Products({products}:any) {
  const [grid, setGrid] = useState<boolean>(true)

  return (
    <section className="py-5">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Tất cả sản phẩm</h1>
        <section>
          <div className="flex items-center gap-x-3">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Màu
                  <FontAwesomeIcon icon={faChevronDown}
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 px-2">
                    {colors.map((option, optionIdx) => (
                      <div key={option.label}>
                        <div key={option.value} className="flex items-center">
                          <input id={`filter-${option.label}-${optionIdx}`} name={`color`}
                            defaultValue={option.value} type="checkbox" defaultChecked={option.checked}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor={`filter-${option.label}-${optionIdx}`} className="ml-3 text-sm text-gray-600" >
                            {option.label}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <FontAwesomeIcon icon={faChevronDown}
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button type="button" onClick={() => { setGrid(!grid) }
            }
              className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
              <span className="sr-only">View grid</span>
              {
                grid ?
                  <FontAwesomeIcon icon={faGrip} className="h-5 w-5" aria-hidden="true" />
                  :
                  <FontAwesomeIcon icon={faList} className="h-5 w-5" aria-hidden="true" />
              }
            </button>
          </div>
        </section>
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
                  <FontAwesomeIcon icon={faX} className='w-3 h-3 text-gray-600 hidden group-hover:inline-block' />
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
          <CategoriesList />

          {/* Product grid */}
          <div className="lg:col-span-3">
            <GridLayout data={products} isGrid={grid}/>
          </div>
        </div>
      </section>
    </section>
  )
};