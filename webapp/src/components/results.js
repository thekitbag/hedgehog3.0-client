import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

class Result extends React.Component {
    render() {
        return  <IonCard>
                    <IonCardHeader>
                    <IonCardTitle>{this.props.name}</IonCardTitle>
                    <IonCardSubtitle>{this.props.type}</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
    }
}

class Results extends React.Component {

    render () {
        return  <ion-grid>
            <ion-row>
                <ion-column>
                    {this.props.search_term &&
                    <h3>Results for {this.props.search_term}</h3>}
                </ion-column>
            </ion-row>
                    <ion-row>
                        {this.props.results.map( result => 
                            <ion-col size="6" key={result.id} >
                                <Result
                                name={result.name}
                                type={result.type}
                                />
                            </ion-col>
                        )}
                    </ion-row>
                </ion-grid>
                
    }
}

export default Results
