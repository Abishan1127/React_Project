import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServiceCard from './ServiceCard';

const services = [
  { title: "Web Dev", description: "Full-stack development", icon: "/assets/code.svg" },
  { title: "UI/UX Design", description: "Modern UI/UX", icon: "/assets/design.svg" },
  { title: "SEO", description: "Boost traffic", icon: "/assets/seo.svg" }
];

const ServiceCarousel = () => (
  <Swiper slidesPerView={1.2} autoplay={{ delay: 2500 }} spaceBetween={10}>
    {services.map((s, i) => (
      <SwiperSlide key={i}>
        <ServiceCard {...s} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ServiceCarousel;
