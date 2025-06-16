import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';

const team = [
  { name: "Sarah Chen", role: "CEO", image: team1 },
  { name: "David Rodriguez", role: "CTO", image: team2 },
  { name: "Emily Carter", role: "Head of Design", image: team3 },
];

const testimonials = [
  {
    image: client1,
    text: "Innovatech Solutions transformed our business with their innovative solutions.",
    author: "Alex Johnson, CEO of TechCorp",
  },
  {
    image: client2,
    text: "Their team's expertise and dedication are unmatched.",
    author: "Michael Lee, Founder of StartupX",
  },
  {
    image: client3,
    text: "We highly recommend Innovatech Solutions for any technology needs.",
    author: "Jessica Brown, Director at Global Enterprises",
  },
];

const About = () => {
  return (
    <div className="container py-5">
      {/* Title + Intro */}
      <h2 className="h2 fw-bold mb-3">About Innovatech Solutions</h2>
      <p className="text-muted mb-4">
        At Innovatech Solutions, we are driven by a passion for innovation and a commitment to
        excellence. Our mission is to empower businesses with cutting-edge technology solutions
        that drive growth and success. We believe in fostering a collaborative environment where
        creativity and expertise converge to deliver exceptional results.
      </p>

      {/* Our Values */}
      <h3 className="h5 fw-semibold mb-2">Our Values</h3>
      <p className="text-muted mb-5">
        <strong>Integrity:</strong> We uphold the highest ethical standards in all our
        interactions. <strong>Innovation:</strong> We embrace creativity and continuously seek
        new and better ways to serve our clients. <strong>Collaboration:</strong> We work closely
        with our clients and partners to achieve shared goals. <strong>Excellence:</strong> We
        strive for excellence in every aspect of our work, from strategy to execution.
      </p>

      {/* Team Section */}
      <h3 className="h5 fw-semibold mb-4">Meet Our Team</h3>
      <div className="row text-center mb-5">
        {team.map((member, index) => (
          <div key={index} className="col-md-4 mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-circle mb-3"
              style={{ width: '110px', height: '110px', objectFit: 'cover' }}
            />
            <p className="fw-medium mb-0">{member.name}</p>
            <p className="text-muted small">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <h3 className="h5 fw-semibold mb-4">Client Testimonials</h3>
      <div className="row">
        {testimonials.map((t, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={t.image}
                alt="Client"
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p className="card-text fst-italic text-muted mb-2">"{t.text}"</p>
                <p className="text-muted small">– {t.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
