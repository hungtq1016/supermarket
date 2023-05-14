'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper";
import ProductVertical from "./ProductVertical";
import { IVariant } from "@/lib/interface";

export default function ProductSwiper({products}:{products:Array<IVariant>}) {
    return(
        <>
            <Swiper slidesPerView={4} spaceBetween={8} modules={[Navigation,Pagination]} loop={true} navigation={true} className="product-section">
                {products.map((product,index:number)=>{
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
