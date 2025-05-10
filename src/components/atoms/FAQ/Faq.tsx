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
        {question}
        <div className="plus-icon-wrapper">
          <PlusSign />
        </div>
      </summary>
      <p>{answer}</p>
    </details>
  );
}