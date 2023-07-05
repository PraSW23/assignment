import React from 'react';
import { AppRegistry } from 'react-native';
import firebase from 'firebase';
import App from './App';
import { name as appName } from './app.json';
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId:  MEASUREMENT_ID
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);   
}

AppRegistry.registerComponent(appName, () => App);
