import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent } from '@ionic/react';
import './Reviews.css';
import { ComingSoon } from '../../../assets/icons';

export default function Reviews() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reviews</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="reviews">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reviews</IonTitle>
          </IonToolbar>
        </IonHeader>

        <p className='reviews--leave-us-a-review'>
          We invite you to join our community of satisfied clients by sharing your own experience—please
          leave a review on our Google Business page. Your feedback not only helps us
          continue delivering outstanding haircuts and styling but also guides new
          customers to choose the best barbershop experience available in Fontana.
        </p>

        <IonCard>
          <IonCardContent color="secondary" className="reviews--coming-soon">
            <ComingSoon />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};