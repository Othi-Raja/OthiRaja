// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZrXqVD7NVdYOVAzjDko-ONksRoMTc7ho",
  authDomain: "portfolioformdata-4caae.firebaseapp.com",
  databaseURL: "https://portfolioformdata-4caae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolioformdata-4caae",
  storageBucket: "portfolioformdata-4caae.appspot.com",
  messagingSenderId: "51070256017",
  appId: "1:51070256017:web:9395f746a33189a57c1030",
  measurementId: "G-PEYFMT3DE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize get analytics
// const analytics = getAnalytics(app);
// export app to contact form 
export default app;
