import React from 'react';
import { IonContent, IonHeader, IonPage, IonTabButton, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { location } from 'ionicons/icons';
import { getRequest } from '../utils/api';
import InfoForm from '../forms/infoForm';

class Place extends React.Component {
    state = {'loading': true}

    getPlaceDetails = async () => {
        const placeId = this.props.match.params.placeId
        const details = await getRequest('/place_details?place_id=' + placeId)
        this.setState({'details': details.data.details, 'loading': false})
    }

    async 
    
    componentDidMount () {
        this.getPlaceDetails();
    }

    render() {
        return (
          <IonPage>
            <IonContent fullscreen>
            {this.state.loading === false &&
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle>{this.state.details.name}</IonTitle>
                </IonToolbar>
              </IonHeader>
            }
              <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonTabButton>
                                    <IonIcon icon={location} size="large" />
                                </IonTabButton>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonTabButton>
                                    <IonLabel>
                                        <h1 className="ion-text-center">Score: 76</h1>
                                    </IonLabel>
                                </IonTabButton>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <p>A lovely little pub on the high street famed for its Sunday lunches and great beer garden.</p>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <img src="./assets/wordcloud.png" alt="wordcloud" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <h5>Ask a Question about the Vine and get an instant response</h5>
                            </IonItem>
                            <IonItem>
                                <InfoForm />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonButton expand="block" size="default" slot="start" >Read Reviews</IonButton>
                                <IonButton expand="block" size="default" slot="end" >Leave Review</IonButton>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
          </IonPage>
        );
      }
}

export default Place
