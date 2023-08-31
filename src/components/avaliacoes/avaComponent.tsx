import { Swiper, SwiperSlide } from "swiper/react"
import Hero from '../../assets/testimonialHero.png';
import { TestimonialsData } from '../../data/testimonials';
import { Pagination, Navigation  } from "swiper/modules";

export const AvaComponent = () => {
  return (
    <div className='testimonials flex flex-col justify-center text-center px-4 py-2'>
      <div className='wrapper grid place-items-end w-full grid-cols-h max-sm:grid-cols-1'>
        <div className='containe flex flex-col gap-4 text-left max-sm:text-center'>
          <span className='text-[1.8rem] uppercase block font-bold'>Avaliação</span>
          <span className='text-[0.8rem] uppercase block'>
            Seedly diz que o produto é incrivel e quer comprar de novo!
          </span>
        </div>
        <div className='w-full flex items-center justify-center'>
          <img
            src={Hero}
            alt="HeroImg"
            className='w-[24rem]'
          />
        </div>
        <div className='containe flex flex-col gap-4 text-right max-sm:text-center max-sm:w-full max-sm:mb-10'>
          <span className='text-[1.8rem] uppercase block font-bold'>100k</span>
          <span className='text-[0.8rem] uppercase block'>Clientes felizes conosco </span>
        </div>
      </div>
      <div className='reviews text-[2rem] font-bold uppercase'>Reviews</div>
      <div className='carousel w-full mt-10'>
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          breakpoints={{
            856: {
              slidesPerView: 3
            },
            640: {
              slidesPerView: 2
            },
            0: {
              slidesPerView: 1
            }
          }}
          className='tcarousel p-8  '
        >
          {
            TestimonialsData.map((tes) => (
              <SwiperSlide>
                <div className='testimonial flex flex-col relative  items-center justify-center'>
                  <img 
                  src={tes.img} 
                  alt="avatarUser" 
                  className=''
                  />
                  <div className='bg-white w-full p-4 rounded-md flex flex-col items-center justify-between'>
                    <span className="items-center text-[0.8rem] border-b-2 p-2 ">{tes.comment}</span>
                    <br />
                    <span className='text-[1rem] font-semibold'>{tes.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}