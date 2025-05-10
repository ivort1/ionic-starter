import { IonFab, IonFabButton, IonFabList } from '@ionic/react';
import Modal from '../../molecules/Modal';

import "./CtaButton.css";

interface CtaButtonProps {
  icon: React.ReactNode;
}

export default function CtaButton({ icon }: CtaButtonProps) {
  return (
    <button className="button-85" id="open-modal">
      { icon }
      <Modal />
    </button>
  );
}