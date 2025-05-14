import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonList, IonItem, IonLabel } from '@ionic/react';

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

        <p className="services--complimentary">
          Every service includes a complimentary drink and your choice of a tonic massage or hand massager.
        </p>

        <IonList inset={true}>
          {
            services.map(({ service, details, price }, index) => (
              <IonItem>
                <IonLabel>
                  <Service key={index} service={service} details={details} price={price} />
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};