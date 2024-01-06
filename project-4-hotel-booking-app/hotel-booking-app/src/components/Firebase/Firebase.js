import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDGfPvpI_AfRNmSPkOtRNGjwARMLJuGu-o",
  authDomain: "hotel-booking-app-15b42.firebaseapp.com",
  projectId: "hotel-booking-app-15b42",
  storageBucket: "hotel-booking-app-15b42.appspot.com",
  messagingSenderId: "420492336240",
  appId: "1:420492336240:web:2cfb8c536cc6e95fb0a8b5",
  measurementId: "G-SWJCWHHFSS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage, app };