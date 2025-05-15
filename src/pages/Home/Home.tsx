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

import { ChatOutline, PhoneOutline, InstagramOutline } from '../../../assets/icons';

// JSON data
import json from "../../database/database.json";
import { Database } from "../../database/database";

import Hours from '../../components/atoms/BusinessHours/Hours/Hours';
import StarryNight from '../../components/atoms/StarryNight/StarryNight';

export default function Home() {
  const data: Database = json;
  const { information, business_hours, social_media } = data;

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
        
        <div className="home">
          <img src={logo} alt="logo" className="home--logo" />

          <div className="home--about">
            <h2>{information.name}</h2>
            <p>
              Barbershop based in Fontana, CA serving Los Angeles, Orange, and San Bernardino counties. We are
              committed to exceptional professionalism, quality, and personalized care for every client.
              We offer premium haircuts, fades, and other styles in a laid-back setting, ensuring you step out looking your absolute best.
            </p>

            <div className="home--about-contact">
              <a className="home--about-contact-svg" href={`sms:${information.phone}`}>
                { <ChatOutline /> } Text
              </a>

              <a className="home--about-contact-svg" href={`tel:${information.phone}`}>
                { <PhoneOutline />} Call
              </a>
              
              <a className="home--about-contact-svg" href={social_media.instagram_url} target="_blank" rel="noopener noreferrer">
                { <InstagramOutline />} Connect
              </a>
            </div>
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
            <div className="home--card-content-subject-to-change">* Hours may vary; check online for available appointment times. Weekend slots are fluid—no fixed hours, so please refer to our online schedule.</div>
          </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};