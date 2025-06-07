import ServiceCard from '../components/ServiceCard';

const services = [
  { title: "Dev", description: "Modern JS frameworks", icon: "/assets/code.svg" },
  { title: "Design", description: "UI/UX focused", icon: "/assets/design.svg" },
  { title: "Marketing", description: "SEO + PPC", icon: "/assets/seo.svg" }
];

const Services = () => (
  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
    {services.map((s, i) => <ServiceCard key={i} {...s} />)}
  </div>
);

export default Services;
