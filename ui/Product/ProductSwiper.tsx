'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper";
import ProductVertical from "./ProductVertical";

export default function ProductSwiper(props:any) {
    const products =  props.products
    const rows = props.rows
    return(
        <>
            <Swiper slidesPerView={4} spaceBetween={8} modules={[Navigation,Pagination]} loop={true} navigation={true} className="product-section">
                {products?.map((product:any,index:number)=>{
                    return(
                        <SwiperSlide key={index}>
                            <ProductVertical product={product}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
};
