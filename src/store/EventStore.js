import { defineStore } from "pinia";

import {
  getFirestore,
  onSnapshot,
  collection,
  doc,
  setDoc,
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
export const eventStore = defineStore("event", {
  state: () => ({ event: undefined, eventDetails: undefined }),
  getters: {},
  actions: {
    Getevent() {
      const latestQuery = query(collection(db, "event"));
      onSnapshot(latestQuery, (snapshot) => {
        this.event = [];
        snapshot.docs.map((doc) => {
          this.event.push({
            id: doc.id,
            comments: doc.data().comments,
            date: doc.data().date,
            title: doc.data().title,
            img: doc.data().img,
            time: doc.data().time,

            txt: doc.data().txt,
            location: doc.data().location,
          });
        });
      });
    },
    GeteventDetails(id) {
      const latestQuery = query(doc(db, "event", id));
      onSnapshot(latestQuery, (snapshot) => {
        this.eventDetails = snapshot.data();
      });
    },
    sendComment(id, comment) {
      setDoc(doc(db, "event", id), {
        id: id,
        comments: this.eventDetails.comments.concat([comment]),
        date: this.eventDetails.date,
        title: this.eventDetails.title,
        img: this.eventDetails.img,
        txt: this.eventDetails.txt,
        location: this.eventDetails.location,
        time: this.eventDetails.time,
      });
    },
    deleteComment(id, commentId) {
      setDoc(doc(db, "event", id), {
        id: id,
        comments: this.eventDetails.comments.filter((c) => c.id != commentId),
        date: this.eventDetails.date,
        title: this.eventDetails.title,
        location: this.eventDetails.location,
        time: this.eventDetails.time,

        img: this.eventDetails.img,
        txt: this.eventDetails.txt,
      });
    },
  },
});
