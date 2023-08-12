import { Swiper, SwiperSlide } from "swiper/react"


export const SlideComponent = () => {
  return (
    <div className="s-containe ">
      <Swiper>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </div>
  )
}