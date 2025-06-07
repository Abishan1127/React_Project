const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white shadow-md p-4 rounded-md text-center">
    <img src={icon} alt={title} className="h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
