import BannerSlider from '../components/BannerSlider';

const Home = () => {
  return (
    <div className="pt-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Slider */}
        <BannerSlider />

        {/* Company Intro */}
        <section className="my-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Empowering Your Digital Future</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At Innovatech Solutions, we provide smart, scalable solutions tailored to your business needs.
            Our team combines technical expertise with innovation to help you thrive in the digital world.
          </p>
        </section>

        {/* Why Choose Us */}
       <section className="my-16">
  <h3 className="text-xl font-semibold text-center mb-10">Why Choose Us</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="border rounded-lg p-6 text-center hover:shadow transition">
      <div className="text-3xl mb-4">📊</div>
      <h4 className="font-semibold mb-2">Proven Expertise</h4>
      <p className="text-gray-600 text-sm">
        Our team of experts brings years of experience and a track record of success in delivering innovative solutions.
      </p>
    </div>
    <div className="border rounded-lg p-6 text-center hover:shadow transition">
      <div className="text-3xl mb-4">👥</div>
      <h4 className="font-semibold mb-2">Client-Centric Approach</h4>
      <p className="text-gray-600 text-sm">
        We prioritize your needs and work closely with you to ensure your goals are met.
      </p>
    </div>
    <div className="border rounded-lg p-6 text-center hover:shadow transition">
      <div className="text-3xl mb-4">🛡️</div>
      <h4 className="font-semibold mb-2">Reliable Security</h4>
      <p className="text-gray-600 text-sm">
        We employ robust security measures to protect your data and ensure the reliability of our services.
      </p>
    </div>
  </div>
</section>


        {/* Mini Testimonials */}
        <section className="my-16">
          <h3 className="text-xl font-semibold text-center mb-10">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <p className="italic mb-2">“Innovatech helped us scale quickly and reliably. Truly outstanding support!”</p>
              <p className="text-sm text-gray-500">– Maya Singh, COO of Finlytics</p>
            </div>
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <p className="italic mb-2">“From UX to backend, everything was seamless. A great tech partner!”</p>
              <p className="text-sm text-gray-500">– Chris Miller, Founder of DevCore</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
