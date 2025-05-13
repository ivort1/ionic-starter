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

import logo from "../../../assets/logo.svg";

import { ChatOutline, PhoneOutline } from '../../../assets/icons';

// JSON data
import json from "../../database/database.json";
import { Database } from "../../database/database";

import Hours from '../../components/atoms/BusinessHours/Hours/Hours';
import StarryNight from '../../components/atoms/StarryNight/StarryNight';

export default function Home() {
  const data: Database = json;
  const { business_hours } = data;

  return (
    <IonPage className="no-scrollbar">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader> */}

        <StarryNight />
        
        <img src={logo} alt="logo" />

        <div className="home--about">
          <h2>ET Fadezz</h2>
          <p>
            Licensed barber serving Los Angeles and San Bernardino counties,
            committed to exceptional professionalism, quality, and personalized
            care for every client.
          </p>

          <div className="home--about-contact">
            <span className="home--about-contact-svg">{ <ChatOutline /> } Text</span>
            <span className="home--about-contact-svg">{<PhoneOutline />} Call</span>
          </div>
        </div>

      <IonCard>
          <IonCardHeader>
            <IonCardTitle className="home--card-title-service-hours">Service Hours</IonCardTitle>
          </IonCardHeader>

          <IonCardContent className="home--card-content-service-hours">
            {
              business_hours.map(({ day, open, close, closed}, index) => (
                <Hours day={day} open={open} close={close} closed={closed} key={index}/>
              ))
            }
          </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};