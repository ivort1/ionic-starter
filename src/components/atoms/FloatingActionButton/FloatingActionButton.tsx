import { IonFab, IonFabButton } from '@ionic/react';
import Modal from '../../molecules/Modal';


import "./FloatingActionButton.css";

interface FloatingActionButtonProps {
  icon: React.ReactNode;
}

export default function FloatingActionButton({ icon }: FloatingActionButtonProps) {
  return (
    <IonFab horizontal="end" vertical="bottom" slot="fixed">
        <IonFabButton id="open-modal">
          { icon }
        </IonFabButton>
        <Modal />
    </IonFab>
  );
}