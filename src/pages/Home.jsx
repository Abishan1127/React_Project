import BannerSlider from '../components/BannerSlider';
import ServiceCarousel from '../components/ServiceCarousel';

const Home = () => (
  <div>
    <BannerSlider />
    <section className="p-6">
      <h2 className="text-center text-2xl font-bold mb-4">Our Services</h2>
      <ServiceCarousel />
    </section>
  </div>
);

export default Home;
