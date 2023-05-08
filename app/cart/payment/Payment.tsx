'use client'
import {  ReactEventHandler, useState } from 'react'
import { RadioGroup } from '@headlessui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { State }  from 'country-state-city';
import { useRouter } from 'next/navigation';


const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    quantity:3
  },
  // More products...
]
const deliveryMethods = [
  { id: 1, title: 'Bình Thường', turnaround: '3-5 ngày', price: '10.000 VNĐ' },
  { id: 2, title: 'Nhanh', turnaround: '1-2 ngày', price: '50.000 VNĐ' },
]
const paymentMethods = [
  { id: 'visa', title: 'Visa' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'Ngân Hàng' },
]


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Payment() {
    const cities = State.getStatesOfCountry('VN')
    const router = useRouter()

    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])

  return (
      <section className="pb-10">
          <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">Thông Tin Giao Hàng</h2>
                      <div className="mt-6 border-t border-gray-200">
                          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                              <div>
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                      Họ
                                  </label>
                                  <div className="mt-1">
                                      <input type="text" id="first-name" name="first-name" autoComplete="given-name" 
                                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm" />
                                  </div>
                              </div>

                              <div>
                                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                                      Tên
                                  </label>
                                  <div className="mt-1">
                                      <input type="text" id="last-name" name="last-name" autoComplete="family-name" 
                                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm" />
                                  </div>
                              </div>

                              <div className="sm:col-span-2">
                                  <label htmlFor="city" className="block text-sm font-medium text-gray-900">
                                      Tỉnh/TP
                                  </label>
                                  <div className="mt-1">
                                      <select defaultValue={"Hồ Chí Minh"}
                                      className=" block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ">
                                          {
                                            cities.map((city)=>{
                                                return(
                                                    <option key={city.isoCode} value={city.name}>{city.name}</option>
                                                )
                                            })
                                          }
                                      </select>
                                  </div>
                              </div>

                              <div className="sm:col-span-2">
                                  <label htmlFor="address" className="block text-sm font-medium text-gray-900">
                                      Địa Chỉ
                                  </label>
                                  <div className="mt-1">
                                      <input type="text" name="address" id="address" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm" />
                                  </div>
                              </div>

                              <div className="sm:col-span-2">
                                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                      Số Điện Thoại
                                  </label>
                                  <div className="mt-1">
                                      <input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm" />
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mt-10 border-t border-gray-200 pt-10">
                          <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                              <RadioGroup.Label className="text-lg font-medium text-gray-900">Phương Thức Giao Hàng</RadioGroup.Label>

                              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                  {deliveryMethods.map((deliveryMethod) => (
                                      <RadioGroup.Option
                                          key={deliveryMethod.id}
                                          value={deliveryMethod}
                                          className={({ checked, active }) =>
                                              classNames(
                                                  checked ? 'border-transparent' : 'border-gray-300',
                                                  active ? 'ring-2 ring-rose-500' : '',
                                                  'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                                              )
                                          }
                                      >
                                          {({ checked, active }) => (
                                              <>
                                                  <span className="flex flex-1">
                                                      <span className="flex flex-col">
                                                          <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                                              {deliveryMethod.title}
                                                          </RadioGroup.Label>
                                                          <RadioGroup.Description
                                                              as="span"
                                                              className="mt-1 flex items-center text-sm text-gray-500"
                                                          >
                                                              {deliveryMethod.turnaround}
                                                          </RadioGroup.Description>
                                                          <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                                                              {deliveryMethod.price}
                                                          </RadioGroup.Description>
                                                      </span>
                                                  </span>
                                                  {checked ? (
                                                      <FontAwesomeIcon icon={'check-circle'} className="h-5 w-5 text-rose-600" aria-hidden="true" />
                                                  ) : null}
                                                  <span
                                                      className={classNames(
                                                          active ? 'border' : 'border-2',
                                                          checked ? 'border-rose-500' : 'border-transparent',
                                                          'pointer-events-none absolute -inset-px rounded-lg'
                                                      )}
                                                      aria-hidden="true"
                                                  />
                                              </>
                                          )}
                                      </RadioGroup.Option>
                                  ))}
                              </div>
                          </RadioGroup>
                      </div>

                      {/* Payment */}
                      <div className="mt-10 border-t border-gray-200 pt-10">
                          <h2 className="text-lg font-medium text-gray-900">Thanh Toán</h2>

                          <fieldset className="mt-4">
                              <legend className="sr-only">Chọn</legend>
                              <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                  {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                                      <div key={paymentMethod.id} className="flex items-center">
                                          {paymentMethodIdx === 0 ? (
                                              <input
                                                  id={paymentMethod.id}
                                                  name="payment-type"
                                                  type="radio"
                                                  defaultChecked
                                                  className="h-4 w-4 border-gray-300 text-rose-600 focus:ring-rose-500"
                                              />
                                          ) : (
                                              <input
                                                  id={paymentMethod.id}
                                                  name="payment-type"
                                                  type="radio"
                                                  className="h-4 w-4 border-gray-300 text-rose-600 focus:ring-rose-500"
                                              />
                                          )}

                                          <label htmlFor={paymentMethod.id} className="ml-3 block text-sm font-medium text-gray-900">
                                              {paymentMethod.title}
                                          </label>
                                      </div>
                                  ))}
                              </div>
                          </fieldset>

                      </div>
                  </div>

                  {/* Order summary */}
                  <div className="mt-10 lg:mt-0">
                      <h2 className="text-lg font-medium text-gray-900">Tổng Quan</h2>

                      <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                          <h3 className="sr-only">Hàng Trong Giỏ</h3>
                          <ul role="list" className="divide-y divide-gray-200">
                              {products.map((product) => (
                                  <li key={product.id} className="flex px-4 py-6 sm:px-6">
                                      <div className="flex-shrink-0">
                                          <img src={product.imageSrc} alt={product.imageAlt} className="w-20 rounded-md" />
                                      </div>

                                      <div className="ml-6 flex flex-1 flex-col">
                                          <div className="flex">
                                              <div className="min-w-0 flex-1">
                                                  <h4 className="text-sm">
                                                      <a href={product.href} className="font-medium text-gray-900 hover:text-gray-800">
                                                          {product.title}
                                                      </a>
                                                  </h4>
                                                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                  <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                                              </div>

                                              <div className="ml-4 flow-root flex-shrink-0">
                                                  <button
                                                      type="button"
                                                      className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                                                  >
                                                      <span className="sr-only">Remove</span>
                                                      <FontAwesomeIcon icon={'trash'} className="h-5 w-5" aria-hidden="true" />
                                                  </button>
                                              </div>
                                          </div>

                                          <div className="flex flex-1 items-end justify-between pt-2">
                                              <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>

                                              <div className="ml-4">
                                                  <label htmlFor="quantity" className="sr-only">
                                                      Quantity
                                                  </label>
                                                  <input type="text" name="quantity" id="quantity" value={product.quantity} disabled
                                                  className='rounded-md w-10'/>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                              ))}
                          </ul>
                          <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                              <div className="flex items-center justify-between">
                                  <dt className="text-sm">Tạm Tính</dt>
                                  <dd className="text-sm font-medium text-gray-900">1.000.000 VNĐ</dd>
                              </div>
                              <div className="flex items-center justify-between">
                                  <dt className="text-sm">Phí Vận Chuyển</dt>
                                  <dd className="text-sm font-medium text-gray-900">10.000 VNĐ</dd>
                              </div>

                              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                  <dt className="text-base font-medium">Tổng</dt>
                                  <dd className="text-base font-medium text-gray-900">1.010.000 VNĐ</dd>
                              </div>
                          </dl>

                          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                              <button type="submit" onClick={() => router.push(`/cart/confirm/${'645739f4bb9ad70736502132'}`)}
                              className="w-full rounded-md border border-transparent bg-rose-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-50" >
                                  Xác Nhận
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
