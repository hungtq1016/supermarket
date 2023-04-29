'use client'
import { useState } from "react";
import { Rating } from "@mui/material";
import ProductSection from "@/ui/ProductSection";
import Link from "next/link";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export const metadata = {
    title: 'Smarket | Danh Mục '
};

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide:true,
    focusOnSelect:true,
    arrows:false
  };
const images =[
    {
        url: '/images/ps5-1.jpg'
    },
    {
        url: '/images/ps5-2.jpg'
    },
    {
        url: '/images/ps5-3.jpg'
    },
    {
        url: '/images/ps5-4.jpg'
    },
    {
        url: '/images/ps5-5.jpg'
    },
]
const colors=['red','white','lightblue']
const sizes = ['xs','s','m','l','xl']

const product = {
    name: 'Havic HV G-92 Gamepad',
    slug: 'dao-cao-rau',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi voluptates expedita at. Dolor ex illo, esse commodi aut fugit atque nihil possimus voluptates corrupti voluptatem ullam accusantium ipsam sequi?',
    price: 500000,
    discount: 279000,
    rating: 4.8,
    color:'red',
    size:'m',
    totalRating: 664,
    inStock: 5
}

const imageList = images.map((image,index)=>(
    <div key={index} className='relative'>
        <img src={image.url} alt="#" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-20 z-[1]"/>

    </div>
))

function Page() {
    const [nav1, setNav1] = useState<Slider>();
    const [nav2, setNav2] = useState<Slider>();
    const [color,setColor] = useState<string>(product.color);
    const [size,setSize] = useState<string>(product.size);
    const [count, setCount] = useState<number>(1);

    function increase() {
        (count < product.inStock) && setCount(count + 1)
    }

    function decrease() {
        setCount(prevCount => Math.max(prevCount - 1, 1));
    }

    function changeColor(event: React.ChangeEvent<HTMLInputElement>){
        setColor(event.target.value)
    }

    function changeSize(event: React.ChangeEvent<HTMLInputElement>){
        setSize(event.target.value)
    }
    return ( 
        <>
            <section>
                <div className="max-w-7xl mx-4 md:mx-auto pt-10 pb-20">
                    <div className="grid grid-cols-12 gap-x-8">
                        <div className="col-span-7">
                            <div className="grid grid-cols-5">
                                <div className="flex items-center">
                                <Slider  {...settings} asNavFor={nav1} 
                                // ref={(slider2) => setNav2(slider2)} 
                                >
                                    {imageList}
                                </Slider>
                                </div>
                                <div className="col-span-4">
                                    
                                    <Slider asNavFor={nav2} arrows={false} 
                                    // ref={(slider1) => setNav1(slider1)}
                                    >
                                        {imageList}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5">
                            <div className="flex flex-col justify-between h-full">
                            <div className="text-2xl font-semibold capitalize">{product.name}</div>
                            <div className="flex gap-x-3 text-sm">
                                <div className="flex items-center gap-x-2"><Rating value={product.rating}/> <span>({product.totalRating} đánh giá)</span></div>
                                <span>|</span>
                                {product.inStock > 0 ? <div className="text-lime-600">Còn Hàng</div> : <div className="text-red-600">Hết Hàng</div>}
                            </div>
                            <div className="text-2xl">{product.price.toLocaleString()} VNĐ</div>
                            <div className="text-sm text-gray-900 text-justify pb-8 border-b-2 border-gray-400">{product.desc}</div>
                            <div className="flex gap-x-6 items-center">
                                <span className="capitalize text-xl">
                                    Màu:
                                </span>
                                <div className="flex gap-x-2">
                                {colors.map((item,index)=>(
                                    <div className="flex items-center gap-x-2">
                                        <input id={item+index} type="radio" value={item} name="colored-radio" className="w-4 h-4" style={{accentColor:item}} checked={color === item} onChange={changeColor}/>
                                        <label htmlFor={item+index} className={`font-medium capitalize `}>{item}</label>
                                    </div>
                                        
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-x-6 items-center">
                                <span className="capitalize text-xl">
                                    Size:
                                </span>
                                <div className="flex gap-x-2">
                                    {sizes.map((item,index)=>(
                                        <div className="flex items-center gap-x-4" key={index}>
                                            <input id={item+index} type="radio" value={item} name="size-radio" className="sr-only peer"  checked={size === item} onChange={changeSize}/>
                                            <label htmlFor={item+index} className='text-sm font-medium uppercase w-8 h-8 flex items-center justify-center border-2 border-gray-400 hover:border-rose-600 duration-500 rounded-md peer-checked:border-rose-600'>{item}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <div className="flex">
                                    <button onClick={decrease} className='w-10 h-10 flex items-center justify-center border rounded-l-md duration-500 text-gray-900 hover:text-gray-50 hover:bg-rose-600 disabled:bg-gray-400 disabled:text-gray-50' disabled={!(product.inStock >0)}><FontAwesomeIcon icon={'minus'}/></button>
                                    <input type="number" value={count} className='w-20 border-y text-center text-xl font-medium'/>
                                    <button onClick={increase} className='w-10 h-10 flex items-center justify-center border rounded-r-md duration-500 text-gray-900 hover:text-gray-50 hover:bg-rose-600 disabled:bg-gray-400 disabled:text-gray-50' disabled={!(product.inStock >0)}><FontAwesomeIcon icon={'plus'}/></button>
                                </div>
                                <button className="px-6 py-2 bg-rose-600 rounded-md capitalize text-gray-50 font-medium hover:bg-rose-700 disabled:bg-gray-400" disabled={!(product.inStock >0)}>mua hàng</button>
                                <button className='w-10 h-10 flex items-center justify-center border rounded-md duration-500 bg-red-600 text-gray-50 hover:bg-red-700'><FontAwesomeIcon icon={'heart'}/></button>
                            </div>
                            <div className="border-2 border-gray-400 rounded-md divide-y-2 divide-gray-400">
                                <div className="flex items-center gap-x-4 p-3">
                                    <div>
                                        <FontAwesomeIcon icon={'shipping-fast'} className='w-10 h-10'/>
                                    </div>
                                    <div>
                                        <div className="font-medium">Miễn Phí vận chuyển</div>
                                        <div className="text-xs font-medium">Cho đơn hàng trên 1,000,000 VNĐ</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-4 p-3">
                                    <div >
                                    <FontAwesomeIcon icon={'check'}  className='w-10 h-10'/>
                                    </div>
                                    <div>
                                        <div className="font-medium">Miễn Phí trả đổi</div>
                                        <div className="text-xs font-medium">Hoàn tiền sau 30 ngày <Link href={'/about'} className='font-normal underline'>Thông Tin</Link></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductSection title="Tương Tự" about="Các sản phẩm tương tự" isSlider={false} show={4}/>
        </>
     );
}

export default Page;