import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServiceCard from './ServiceCard';

const services = [
  { title: "Web Dev", description: "Custom web applications", icon: "/assets/code.svg" },
  { title: "UI/UX Design", description: "Intuitive user experiences", icon: "/assets/design.svg" },
  { title: "SEO", description: "Optimize search visibility", icon: "/assets/seo.svg" }
];

const ServiceCarousel = () => (
  <Swiper slidesPerView={1.2} spaceBetween={16} autoplay={{ delay: 2500 }} loop className="py-6">
    {services.map((service, index) => (
      <SwiperSlide key={index}>
        <ServiceCard {...service} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ServiceCarousel;
