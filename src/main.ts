import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL79wr5whiJF65QQHwX2OvylzGVRC4dd0",
  authDomain: "stellercart-84f8d.firebaseapp.com",
  projectId: "stellercart-84f8d",
  storageBucket: "stellercart-84f8d.appspot.com",
  messagingSenderId: "574292515459",
  appId: "1:574292515459:web:38e2c0d85cf64bb3cc59b6",
  measurementId: "G-QNCC99MM31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
