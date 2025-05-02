import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Photos from './pages/Photos/Photos';
import Reviews from './pages/Reviews/Reviews';
import FAQs from './pages/FAQs/FAQs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import "./App.css";

import { Calendar } from '../assets/icons';

import { HomeFill, BarberPole, PhotoFill, FeedbackFill, QuestionMark } from "../assets/icons";
import CtaButton from './components/atoms/CtaButton/CtaButton';

setupIonicReact();

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route path="/photos">
              <Photos />
            </Route>
            <Route path="/reviews">
              <Reviews />
            </Route>
            <Route path="/faqs">
              <FAQs />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <HomeFill />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="services" href="/services">
              <BarberPole />
              <IonLabel>Services</IonLabel>
            </IonTabButton>
            <IonTabButton tab="photos" href="/photos">
              <PhotoFill />
              <IonLabel>Photos</IonLabel>
            </IonTabButton>

            <IonTabButton tab="reviews" href="/reviews">
              <FeedbackFill />
              <IonLabel>Reviews</IonLabel>
            </IonTabButton>

            {/* FAQ */}
            <IonTabButton tab="faqs" href="/faqs">
              <QuestionMark />
              <IonLabel className="ion-label--faqs">Faqs</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>

      <CtaButton icon={<Calendar />} />
    </IonApp>
  );
};