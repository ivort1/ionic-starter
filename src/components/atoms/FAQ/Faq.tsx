import { PlusSign, RightArrow } from "../../../../assets/icons";
import "./Faq.css";

interface FaqProps {
  question: string;
  answer: string;
  name?: string
}

export default function Faq({ name, question, answer }: FaqProps) {
  return (
        <details name={name} className="faq">
            <summary>
                {question}
                <PlusSign />
            </summary>
            <p>{answer}</p>
        </details>
  );
}