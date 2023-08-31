// IMPORTAÇÕES DO SWIPER:
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProductsData} from "../../data/products.js";
import { SlideMap } from "./slideMapComponent.js";
import { Pagination, Navigation  } from "swiper/modules";



export const SlideComponent = () => {
  return (
    <div className="s-container flex flex-col items-center gap-10 relative" id="destaques">
      <h1 className="text-[2rem] font-bold">Destaques</h1>
      <Swiper
        modules={[Pagination, Navigation]}
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
        {ProductsData.map((slide) => (
          <SwiperSlide className="px-4">
              
              <SlideMap data={slide} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}