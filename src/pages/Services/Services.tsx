import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

// Custom components
import Service from "../../components/atoms/Service/Service";

// JSON data
import json from "../../database/database.json";
import { Database } from "../../database/database";

import './Services.css';

export default function Services() {
  const data: Database = json;
  const { services } = data;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Services</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Services</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardContent className="ion-card-content">
            {
              services.map(({ service, details, price }, index) => (
                <Service key={index} service={service} details={details} price={price} />
              ))
            }
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};