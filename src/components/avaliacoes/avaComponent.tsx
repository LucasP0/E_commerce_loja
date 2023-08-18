import { Swiper, SwiperSlide } from "swiper/react"
import Hero from '../../assets/testimonialHero.png';
import { TestimonialsData } from '../../data/testimonials';

export const AvaComponent = () => {
  return (
    <div className='testimonials flex flex-col justify-center text-center px-4 py-2'>
      <div className='wrapper grid place-items-end w-full grid-cols-h'>
        <div className='containe flex flex-col gap-4 text-left '>
          <span className='text-[1.8rem] uppercase block font-bold'>Avaliação</span>
          <span className='text-[0.8rem] uppercase block'>
            Seedly diz que o produto é incrivel e quer comprar de novo!
          </span>
        </div>
        <div className='w-full flex items-center justify-center'>
          <img
            src={Hero}
            alt="HeroImg"
            className='w-[25rem]'
          />
        </div>
        <div className='containe flex flex-col gap-4 text-right'>
          <span className='text-[1.8rem] uppercase block font-bold'>100k</span>
          <span className='text-[0.8rem] uppercase block'>Clientes felizes conosco </span>
        </div>
      </div>
      <div className='carousal'>
        <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        className='tcarousal'
        >
          {
            TestimonialsData.map((tes, i) => (
              <SwiperSlide>
                <div className='testimonial'>
                  <img src={tes.img} alt="avatarUser" />
                  <span>{tes.comment}</span>
                  <br />
                  <span>{tes.name}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}