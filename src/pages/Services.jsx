import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your unique business needs.',
    image: '/assets/service1.jpg',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure and management.',
    image: '/assets/service2.jpg',
  },
  {
    title: 'Data Analytics',
    description: 'Actionable insights from your data to drive informed decisions.',
    image: '/assets/service3.jpg',
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with robust security measures.',
    image: '/assets/service4.jpg',
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance to optimize your IT strategy and operations.',
    image: '/assets/service5.jpg',
  },
  {
    title: 'Digital Transformation',
    description: 'Transforming your business with innovative digital technologies.',
    image: '/assets/service6.jpg',
  },
];

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-2">Our Services</h2>
      <p className="text-gray-600 mb-6 max-w-3xl">
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
        className="py-6"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{service.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
