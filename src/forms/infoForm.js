import React from "react";
import { IonCol, IonGrid, IonInput, IonItem, IonRow } from '@ionic/react';
import { postRequest } from '../utils/api';

class InfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {'info': this.state.value}
        let r = await postRequest('/place_info_request', data)
        const results = r.data.info
        this.props.showInfo(results)
    }

    render() {
        return  <form onSubmit={this.handleSubmit}>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12">
                                <IonItem>
                                    <IonInput type="text" size="240" onIonInput={this.handleChange} color="medium" placeholder="e.g. Is The Vine Child Friendly?" />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
    }
}

export default InfoForm