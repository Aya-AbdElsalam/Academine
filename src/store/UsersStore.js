import { defineStore } from "pinia";

import {
  getFirestore,
  onSnapshot,
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
export const UsersStore = defineStore("Users", {
  state: () => ({
    userDetails: undefined,
    stateOfSignIn: false,
    Enrolled: false,
  }),
  actions: {
    GetStateOfSignIn(user) {
      this.stateOfSignIn = user;
    },
    GetStateOfEnrolled(enrolled) {
      this.Enrolled = enrolled;
    },
    GetUserDetails(id) {
      const latestQuery = query(doc(db, "users", id));
      onSnapshot(latestQuery, (snapshot) => {
        this.userDetails = snapshot.data();
      });
    },
    RemoveUserDetails() {
      this.userDetails = undefined;
    },
    AddCourse(course, idUser) {
      setDoc(doc(db, "users", idUser), {
        courses: this.userDetails.courses.concat([course]),
      });
    },
    RemoveCourse(course, idUser) {
      setDoc(doc(db, "users", idUser), {
        courses: this.userDetails.courses.filter((c) => {
          return c.id !== course;
        }),
      });
    },
    AddUser(user) {
      setDoc(doc(db, "users", user), {
        courses: [],
      });
    },
  },
});
