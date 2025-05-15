import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LazyImg from '../../components/atoms/lazy-img/LazyImg';
import './Photos.css';

export default function Photos() {
  const gallery = Object.values(
    import.meta.glob('@photos/*.{webp,WEBP}', { eager: true, query: '?url', import: 'default' })
  ) as string[];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="photos">
          {gallery.map((photo, index) => (
            <LazyImg key={index} src={photo} alt={`Photo ${index + 1}`} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
}