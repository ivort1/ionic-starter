import { useState, useRef, useEffect } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

import "./Modal.css";

export default function Modal() {
  const modal = useRef<any>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  return (
    <IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement!}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Book an appointment</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => modal.current?.dismiss()}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ padding: 0 }}>
        <iframe
          src="https://gcfadezz.youcanbook.me/"
          title="Appointment Booking"
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        />
      </IonContent>
    </IonModal>  
  );
};