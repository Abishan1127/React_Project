import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import ServiceCard from '../components/ServiceCard'; 
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import service6 from '../assets/service6.png';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your unique business needs.',
    image: service1,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure and management.',
    image: service2,
  },
  {
    title: 'Data Analytics',
    description: 'Actionable insights from your data to drive informed decisions.',
    image: service3,
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with robust security measures.',
    image: service4,
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance to optimize your IT strategy and operations.',
    image: service5,
  },
  {
    title: 'Digital Transformation',
    description: 'Transforming your business with innovative digital technologies.',
    image: service6,
  },
];

const Services = () => {
  return (
    <div className="container py-5">
      <h2 className="h3 fw-bold mb-3">Our Services</h2>
      <p className="text-muted mb-4" style={{ maxWidth: '700px' }}>
        Explore our comprehensive suite of services designed to propel your business forward.
        From cutting-edge technology solutions to strategic consulting, we’re here to help you
        achieve your goals.
      </p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        spaceBetween={24}
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-3"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="p-2">
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
