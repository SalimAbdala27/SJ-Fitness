import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCKz5YbWKCfGrKP_81UW1Cog0K4g-ksZGA",
  authDomain: "gym-project-dev.firebaseapp.com",
  projectId: "gym-project-dev",
  storageBucket: "gym-project-dev.appspot.com",
  messagingSenderId: "870379499067",
  appId: "1:870379499067:web:be55d4a10c78c1c357b61e"
};

// when publishing use .env file

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);