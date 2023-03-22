import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TestButton from '../components/test';
import { IonSearchbar } from '@ionic/react';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hedgehog</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar />
        <TestButton />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
