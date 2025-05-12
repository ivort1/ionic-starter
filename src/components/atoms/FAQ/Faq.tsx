import { PlusSign } from "../../../../assets/icons";
import "./Faq.css";

interface FaqProps {
  question: string;
  answer: string;
  name?: string;
}

export default function Faq({ name, question, answer }: FaqProps) {
  return (
    <details name={name} className="faq">
      <summary>
        <h2>{question}</h2>
        <PlusSign />
      </summary>
      <p>{answer}</p>
    </details>
  );
}