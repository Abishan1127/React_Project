import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const slides = [
  {
    image: '/assets/banner1.jpg',
    heading: 'Welcome to Innovatech Solutions',
    subtext: 'Your partner in digital transformation. We provide cutting-edge solutions tailored to your business needs.',
  },
  {
    image: '/assets/banner2.jpg',
    heading: 'Empowering Your Digital Future',
    subtext: 'Smart, scalable, and efficient digital services to grow your business.',
  },
  {
    image: '/assets/banner3.jpg',
    heading: 'Build. Scale. Succeed.',
    subtext: 'From idea to deployment, we help you succeed with modern tech.',
  },
];

const BannerSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[400px] md:h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center px-4">
                <h2 className="text-2xl md:text-4xl font-bold">{slide.heading}</h2>
                <p className="mt-4 max-w-2xl">{slide.subtext}</p>
                <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow">
                  Explore Our Services
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
