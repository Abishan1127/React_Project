const About = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Mission & Vision</h2>
    <p>We aim to deliver excellent digital solutions...</p>
    <h3 className="mt-6 text-xl font-semibold">Our Team</h3>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div><img src="/assets/team1.jpg" alt="Dev" /> <p>Jane – Developer</p></div>
      <div><img src="/assets/team2.jpg" alt="Designer" /> <p>Mark – Designer</p></div>
    </div>
  </div>
);

export default About;
