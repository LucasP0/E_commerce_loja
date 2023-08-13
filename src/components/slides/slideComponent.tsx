// IMPORTAÇÕES DO SWIPER:
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SliderProducts } from "../../data/products.js";
import { SlideMap } from "./slideMapComponent.js";
import { Pagination, Navigation  } from "swiper/modules";



export const SlideComponent = () => {
  return (
    <div className="s-container relative h-screen">
      <Swiper
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        className="mySwiper w-[75%] h-48"
      >

        {SliderProducts.map((slide, i) => (
          <SwiperSlide className="px-4">
            <SlideMap data={slide} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}