import { defineStore } from "pinia";

import {
  getFirestore,
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWOQIYa8UYNxKUf8pHEc32JG-wM1nN-5E",
  authDomain: "academie-d9f97.firebaseapp.com",
  projectId: "academie-d9f97",
  storageBucket: "academie-d9f97.appspot.com",
  messagingSenderId: "198511257485",
  appId: "1:198511257485:web:f70e50af28166b0f123fc4",
  measurementId: "G-PMV51S4NSE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const teamStore = defineStore("team", {
  state: () => ({ team: [] }),
  getters: {},
  actions: {
    GetTeam() {
      this.team = [];
      const latestQuery = query(collection(db, "Instructors"));
      onSnapshot(latestQuery, (snapshot) => {
        snapshot.docs.map((doc) => {
          this.team.push({
            id: doc.id,
            name: doc.data().name,
            exp: doc.data().exp,
            age: doc.data().age,
            img: doc.data().img,
          });
        });
      });
    },
  },
});
