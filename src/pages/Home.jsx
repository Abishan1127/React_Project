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
          <h3 className="text-xl font-semibold text-center mb-10">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <img src="/assets/icon1.svg" alt="Expertise" className="mx-auto mb-4 h-12" />
              <h4 className="font-semibold mb-2">Proven Expertise</h4>
              <p className="text-gray-600 text-sm">Years of experience building secure and scalable systems.</p>
            </div>
            <div>
              <img src="/assets/icon2.svg" alt="Support" className="mx-auto mb-4 h-12" />
              <h4 className="font-semibold mb-2">End-to-End Support</h4>
              <p className="text-gray-600 text-sm">From discovery to deployment — we’ve got you covered.</p>
            </div>
            <div>
              <img src="/assets/icon3.svg" alt="Innovation" className="mx-auto mb-4 h-12" />
              <h4 className="font-semibold mb-2">Future-Ready Solutions</h4>
              <p className="text-gray-600 text-sm">We leverage the latest tech to future-proof your business.</p>
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
