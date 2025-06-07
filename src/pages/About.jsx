const team = [
  { name: "Sarah Chen", role: "CEO", image: "/assets/team1.png" },
  { name: "David Rodriguez", role: "CTO", image: "/assets/team2.png" },
  { name: "Emily Carter", role: "Head of Design", image: "/assets/team3.png" },
];

const testimonials = [
  {
    image: "/assets/client1.jpg",
    text: "Innovatech Solutions transformed our business with their innovative solutions.",
    author: "Alex Johnson, CEO of TechCorp",
  },
  {
    image: "/assets/client2.jpg",
    text: "Their team's expertise and dedication are unmatched.",
    author: "Michael Lee, Founder of StartupX",
  },
  {
    image: "/assets/client3.jpg",
    text: "We highly recommend Innovatech Solutions for any technology needs.",
    author: "Jessica Brown, Director at Global Enterprises",
  },
];

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title + Intro */}
      <h2 className="text-3xl font-bold mb-4">About Innovatech Solutions</h2>
      <p className="text-gray-700 mb-8">
        At Innovatech Solutions, we are driven by a passion for innovation and a commitment to
        excellence. Our mission is to empower businesses with cutting-edge technology solutions
        that drive growth and success. We believe in fostering a collaborative environment where
        creativity and expertise converge to deliver exceptional results.
      </p>

      {/* Our Values */}
      <h3 className="text-xl font-semibold mb-2">Our Values</h3>
      <p className="text-gray-700 mb-10">
        <strong>Integrity:</strong> We uphold the highest ethical standards in all our
        interactions. <strong>Innovation:</strong> We embrace creativity and continuously seek
        new and better ways to serve our clients. <strong>Collaboration:</strong> We work closely
        with our clients and partners to achieve shared goals. <strong>Excellence:</strong> We
        strive for excellence in every aspect of our work, from strategy to execution.
      </p>

      {/* Team Section */}
      <h3 className="text-xl font-semibold mb-6">Meet Our Team</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-center">
        {team.map((member, index) => (
          <div key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full mx-auto mb-3 object-cover"
            />
            <p className="font-medium">{member.name}</p>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <h3 className="text-xl font-semibold mb-6">Client Testimonials</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white border rounded-lg p-4 shadow-sm">
            <img
              src={t.image}
              alt="Client"
              className="rounded-md w-full h-40 object-cover mb-3"
            />
            <p className="italic text-gray-700 mb-2">"{t.text}"</p>
            <p className="text-sm text-gray-500">– {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
