import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonBadge } from '@ionic/react';

class Result extends React.Component {
    render() {
        return  <IonCard routerLink={'/place/' + this.props.placeId} style={{"height": "100%"}}>
                    <IonCardHeader>
                        <IonCardTitle style={{"font-size": "20px"}}>{this.props.name}</IonCardTitle>
                        <IonCardSubtitle>{this.props.type} in {this.props.location}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonBadge color="secondary">{this.props.rating}</IonBadge>
                    </IonCardContent>
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
                                rating={result.rating}
                                location={result.location}
                                placeId={result.place_id}
                                />
                            </ion-col>
                        )}
                    </ion-row>
                </ion-grid>
                
    }
}

export default Results
