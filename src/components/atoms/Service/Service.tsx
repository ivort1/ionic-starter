import "./Service.css";

interface ServiceProps {
  service: string;
  details: string;
  price: string;
  key: number;
}

export default function Service({ service, details, price, key }: ServiceProps) {
  return (
    <div className="service-component" key={key}>
        <div>
            <h2 className="service-component--service">{service}</h2>
            <p className="service-component--details">{details}</p>
        </div>
        <div className="service-component--price">${price}</div>
    </div>
  );
}