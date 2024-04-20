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
export const FilterStore = defineStore("Filter", {
  state: () => ({ FilterCourses: [], FilterBlog: [], FilterEvent: [] }),
  getters: {},
  actions: {
    Filter(txt) {
      this.FilterBlog = [];
      this.FilterCourses = [];
      this.FilterEvent = [];
      const course = query(collection(db, "Courses"));
      onSnapshot(course, (snapshot) => {
        snapshot.docs.map((doc) => {
          doc.data().title.toLowerCase().includes(txt.toLowerCase().trim()) &&
            txt.trim() !== "" &&
            this.FilterCourses.push({
              id: doc.id,
              title: doc.data().title,
            });
        });
      });
      const blog = query(collection(db, "Blog"));
      onSnapshot(blog, (snapshot) => {
        snapshot.docs.map((doc) => {
          doc.data().title.toLowerCase().includes(txt.toLowerCase().trim()) &&
            txt.trim() !== "" &&
            this.FilterBlog.push({
              id: doc.id,
              title: doc.data().title,
            });
        });
      });
      const event = query(collection(db, "event"));
      onSnapshot(event, (snapshot) => {
        snapshot.docs.map((doc) => {
          doc.data().title.toLowerCase().includes(txt.toLowerCase().trim()) &&
            txt.trim() !== "" &&
            this.FilterEvent.push({
              id: doc.id,
              title: doc.data().title,
            });
        });
      });
    },
  },
});
