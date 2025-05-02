import { IonFab, IonFabButton, IonFabList } from '@ionic/react';
import Modal from '../../molecules/Modal';

import "./CtaButton.css";

interface CtaButtonProps {
  icon: JSX.Element;
}

export default function CtaButton({ icon }: CtaButtonProps) {
  return (
    <button className="button-85" id="open-modal">
      { icon } Book an appointment
      <Modal />
    </button>
  );
}