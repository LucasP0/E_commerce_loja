// IMPORTAÇÕES DO SWIPER:
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProductsData, SliderProducts } from "../../data/products.js";
import { SlideMap } from "./slideMapComponent.js";
import { Pagination, Navigation  } from "swiper/modules";
import { Link } from "react-router-dom";



export const SlideComponent = () => {
  return (
    <div className="s-container relative">
      <Swiper
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 1
          },
        }}
        className="mySwiper w-[75%] max-sm:left-[-0.5rem] h-48 max-md:w-[90%] max-md:h-40"
      >   
        {ProductsData.map((slide, i) => (
          <SwiperSlide className="px-4">
              <SlideMap data={slide} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}