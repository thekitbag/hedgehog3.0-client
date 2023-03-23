import React from "react";
import { IonSearchbar, IonInput } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { getRequest, postRequest } from '../utils/api';

class SearchButton extends React.Component {
    render() {
        return <IonButton onClick={this.props.search} color='dark'>Search</IonButton>
    }
}

class SearchForm extends React.Component {

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
        const data = {'search_term': this.state.value}
        let r = await postRequest('/search', data)
        const results = r.data.places
        const search_term = r.data.search_term
        this.props.updateResults(results, search_term)
    }


    search = async () => {
        let r =  await getRequest('/search', );
        const results = r.data.places
        this.props.updateResults(results)
    }

    render() {
        return  <form onSubmit={this.handleSubmit}>
                    <ion-grid>
                        <ion-row>
                            <ion-col size="12">
                            <ion-input type="text"  onInput={this.handleChange} color="medium" placeholder="Search for a place" />
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="12" class="ion-text-center">
                                <SearchButton 
                                    value="Submit"
                                    search={this.handleSubmit}
                                />
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </form>
    }
}

export default SearchForm