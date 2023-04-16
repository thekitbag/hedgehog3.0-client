import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Results from '../components/results';
import React from 'react'
import SearchForm from '../forms/searchForm';

class Search extends React.Component {
  state = {'results': []}

  updateResults = (results, search_term) => {
    this.setState({'results': results, 'search_term': search_term})
  }

  render () {
    return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Search</IonTitle>
            </IonToolbar>
          </IonHeader>
          <SearchForm updateResults={this.updateResults}/>
          <Results 
            results={this.state.results}
            search_term={this.state.search_term}
          />
        </IonContent>
      </IonPage>
    );
  }
}

export default Search;
