/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';

import AppLayout from './src/AppLayout';

SplashScreen.preventAutoHideAsync();

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDjCKhz69palZFMnzpZ1tZnSz2F8re83h0',
  authDomain: 'justkibris-3eb20.firebaseapp.com',
  projectId: 'justkibris-3eb20',
  storageBucket: 'justkibris-3eb20.appspot.com',
  messagingSenderId: '375366532614',
  appId: '1:375366532614:web:4473b59d1f30c49a274d87',
  measurementId: 'G-J92SMM8J8K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return <AppLayout hideSplashScreen={SplashScreen.hideAsync} />;
}
