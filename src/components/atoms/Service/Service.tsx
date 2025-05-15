import "./Service.css";

interface ServiceProps {
  service: string;
  details: string;
  price: string;
}

export default function Service({ service, details, price }: ServiceProps) {
  return (
    <div className="service-component">
        <div>
            <h2 className="service-component--service">{service}</h2>
            <p className="service-component--details">{details}</p>
        </div>
        <div className="service-component--price">${price}</div>
    </div>
  );
}