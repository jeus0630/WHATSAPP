import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKCEEF8FeEvBXWe5c23L6Qkb-5H1j8WsI",
  authDomain: "whatsapp-2-ef97b.firebaseapp.com",
  projectId: "whatsapp-2-ef97b",
  storageBucket: "whatsapp-2-ef97b.appspot.com",
  messagingSenderId: "441998589980",
  appId: "1:441998589980:web:8b30aa4018721d4b155fd9",
  measurementId: "G-3HSE5RJC4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = app.auth();

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

