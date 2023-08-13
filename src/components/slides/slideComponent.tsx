// IMPORTAÇÕES DO SWIPER:
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SliderProducts } from '../../data/products.js';



export const SlideComponent = () => {
  return (
    <div className="s-containe ">
      <Swiper
        sidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        
          {SliderProducts.map((slide, i) => (
            <SwiperSlide>
              <div className="left-s">
                
              </div>
            </SwiperSlide>
          ))}
        
      </Swiper>
    </div>
  )
}