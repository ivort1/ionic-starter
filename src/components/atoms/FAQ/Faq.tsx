import { PlusSignWithBlackBg } from "../../../../assets/icons";
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
        <span className="summary--svg">
          <PlusSignWithBlackBg />
        </span> 
      </summary>
      <p>{answer}</p>
    </details>
  );
}