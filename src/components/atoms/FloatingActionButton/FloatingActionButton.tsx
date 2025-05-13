import Modal from '../../molecules/Modal';

import "./FloatingActionButton.css";

interface CtaButtonProps {
  icon: React.ReactNode;
}

export default function CtaButton({ icon }: CtaButtonProps) {
  return (
    <button className="button-85" id="open-modal">
      { icon } Book an appointment
      <Modal />
    </button>
  );
}