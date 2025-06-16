import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const slides = [
  {
    image: banner1,
    heading: 'Welcome to Innovatech Solutions',
    subtext: 'Your partner in digital transformation. We provide cutting-edge solutions tailored to your business needs.',
  },
  {
    image: banner2,
    heading: 'Empowering Your Digital Future',
    subtext: 'Smart, scalable, and efficient digital services to grow your business.',
  },
  {
    image: banner3,
    heading: 'Build. Scale. Succeed.',
    subtext: 'From idea to deployment, we help you succeed with modern tech.',
  },
];

const BannerSlider = () => {
  return (
    <div className="w-100">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        className="rounded overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="d-flex align-items-center justify-content-center text-white text-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                position: 'relative',
              }}
            >
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              ></div>

              <div className="position-relative px-3">
                <h2 className="display-5 fw-bold">{slide.heading}</h2>
                <p className="mt-3 mx-auto" style={{ maxWidth: '700px' }}>
                  {slide.subtext}
                </p>
                <button className="btn btn-primary mt-4 shadow">
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
