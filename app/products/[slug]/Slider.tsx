import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { IImage } from "@/lib/interface";
import Image from "next/image";

export default function Slider({ images }: { images: Array<IImage> }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sliders = images?.map((image) => {
    return (
      <SwiperSlide key={image.id} className="flex items-center justify-center">
        <Image src={image.url} alt={image.alt} width={500} height={500} />
      </SwiperSlide>
    );
  })

  return (
    <>
      <Swiper
        loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]}
        className="" >
        {sliders}
      </Swiper>
      <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]}
       className="" >
        {sliders}
      </Swiper>
    </>
  );
}
