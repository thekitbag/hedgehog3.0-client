import React from 'react';
import axios from 'axios';
import { IonButton } from '@ionic/react';

let prefix = 'api'

const getRequest = async (endpoint, params) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  const instance = axios.create({
    withCredentials: true,
    headers: headers
  })

  try {
    if (params) {
      const req = await instance.get(prefix + endpoint + '?' + params)
      return req
    } else {
      const req = await instance.get(prefix + endpoint)
      return req
    }

  } catch (err) {
    if(err.response.status === 401) {
      window.location = '/login'
    }
    console.log(err)
  }
}

const postRequest = async (endpoint, data) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  const instance = axios.create({
    withCredentials: true,
    headers: headers
  })

  try {
      const req = await instance.post(prefix + endpoint, data)
      return req
  } catch (err) {
    console.log(err)
  }
}

class TestButton extends React.Component {
    testConsoleLog = () => {
        console.log('foo foo foo');
    }

    testServerPing = () => {
        getRequest('/test');
    }
    render() {
        return <IonButton onClick={this.testServerPing}>Test</IonButton>
    }
}

export default TestButton