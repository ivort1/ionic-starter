import "./Hours.css";

interface HoursProps {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export default function Hours({ day, open, close, closed }: HoursProps) {
  return (
    <div className="hours">
      <span className="day">{day}</span>
      <span className="dot-leader" />
      <span className="times">
        {closed ? "Closed" : `${open} - ${close}`}
      </span>
    </div>
  );
}2