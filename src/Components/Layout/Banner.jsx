import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Banner.css";

const Banner = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="mt-6 lg:mt-1 max-w-[1300px] mx-auto background py-4 lg:py-0 lg:h-[80vh] grid justify-center items-center">
          <div className="text-center px-6 text-white">
            <p className="text-2xl font-semibold mb-3">Choose Your Books!</p>
             <h2 className="text-center text-xl md:text-6xl font-bold  md:mb-0">
             In Books, We Find Wisdom, Adventure,Solace!
            </h2>
            <button className="mt-7 bg-orange-600 p-6 font-semibold text-xl">Discover Your Next Book</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mt-6 lg:mt-1 max-w-[1300px] mx-auto background2 py-4 lg:py-0 lg:h-[80vh] grid justify-center items-center">
          <div className="text-center px-6 text-white">
            <p className="text-2xl font-semibold mb-3">Choose Your Books!</p>
             <h2 className="text-center text-xl md:text-6xl font-bold  md:mb-0">
             Reading A Good Book Is A Journey To Unknown Realms!
            </h2>
            <button className="mt-7 bg-orange-600 p-6 font-semibold text-xl">Discover Your Next Book</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mt-6 lg:mt-1 max-w-[1300px] mx-auto background3 py-4 lg:py-0 lg:h-[80vh] grid justify-center items-center">
          <div className="text-center px-6 text-white">
            <p className="text-2xl font-semibold mb-3">Choose Your Books!</p>
             <h2 className="text-center text-xl md:text-6xl font-bold  md:mb-0">
             A Room Without Books Is Like A Body Without A Soul!
            </h2>
            <button className="mt-7 bg-orange-600 p-6 font-semibold text-xl">Discover Your Next Book</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
