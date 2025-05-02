import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';

import './Home.css';

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>GCfadezz</IonCardTitle>
            <IonCardSubtitle>Professional barber</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Licensed barber serving Los Angeles and San Bernardino counties,
            committed to exceptional professionalism, quality, and personalized
            care for every client.
          </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};