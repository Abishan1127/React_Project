const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
    <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;
