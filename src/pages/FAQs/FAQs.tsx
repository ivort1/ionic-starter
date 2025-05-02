import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent
} from '@ionic/react';

import './FAQs.css';

import Faq from '../../components/atoms/FAQ/Faq';

// JSON data
import json from "../../database/database.json";
import { Database } from "../../database/database";

export default function FAQs() {
  const data: Database = json;
  const { faqs } = data;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>FAQs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">FAQs</IonTitle>
          </IonToolbar>
        </IonHeader>

        {
          faqs.map(({ question, answer }, index) => (
            <IonCard key={index}>
              <IonCardContent>
                <Faq name="details-faq" question={question} answer={answer}/>
              </IonCardContent>
            </IonCard>
          ))
        }

      </IonContent>
    </IonPage>
  );
};