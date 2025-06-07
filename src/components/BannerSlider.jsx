import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BannerSlider = () => (
  <Swiper autoplay={{ delay: 3000 }}>
    <SwiperSlide>
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <h2 className="text-2xl font-bold">Slide 1: Welcome!</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="h-64 bg-gray-300 flex items-center justify-center">
        <h2 className="text-2xl font-bold">Slide 2: Learn More</h2>
      </div>
    </SwiperSlide>
  </Swiper>
);

export default BannerSlider;
