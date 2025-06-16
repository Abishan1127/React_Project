import BannerSlider from '../components/BannerSlider';

const Home = () => {
  return (
    <div className="pt-4">
      <div className="container">
        {/* Hero Slider */}
        <BannerSlider />

        {/* Company Intro */}
        <section className="my-5 text-center">
          <h2 className="h4 fw-bold mb-3">Empowering Your Digital Future</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            At Innovatech Solutions, we provide smart, scalable solutions tailored to your business needs.
            Our team combines technical expertise with innovation to help you thrive in the digital world.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="my-5">
          <h3 className="h5 fw-semibold text-center mb-4">Why Choose Us</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm p-3">
                <div className="fs-2 mb-3">📊</div>
                <h5 className="fw-semibold">Proven Expertise</h5>
                <p className="text-muted small">
                  Our team of experts brings years of experience and a track record of success in delivering innovative solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm p-3">
                <div className="fs-2 mb-3">👥</div>
                <h5 className="fw-semibold">Client-Centric Approach</h5>
                <p className="text-muted small">
                  We prioritize your needs and work closely with you to ensure your goals are met.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm p-3">
                <div className="fs-2 mb-3">🛡️</div>
                <h5 className="fw-semibold">Reliable Security</h5>
                <p className="text-muted small">
                  We employ robust security measures to protect your data and ensure the reliability of our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mini Testimonials */}
        <section className="my-5">
          <h3 className="h5 fw-semibold text-center mb-4">What Our Clients Say</h3>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <p className="fst-italic mb-2">
                  “Innovatech helped us scale quickly and reliably. Truly outstanding support!”
                </p>
                <p className="text-muted small">– Maya Singh, COO of Finlytics</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <p className="fst-italic mb-2">
                  “From UX to backend, everything was seamless. A great tech partner!”
                </p>
                <p className="text-muted small">– Chris Miller, Founder of DevCore</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
