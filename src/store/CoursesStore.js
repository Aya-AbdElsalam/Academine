/* eslint-disable no-unused-vars */
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
import { getAnalytics } from "firebase/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const CoursesStore = defineStore("Courses", {
  state: () => ({ Courses: undefined, CourseDetails: undefined, c: [] }),
  getters: {},
  actions: {
    GetCourses() {
      const latestQuery = query(collection(db, "Courses"));
      onSnapshot(latestQuery, (snapshot) => {
        this.Courses = [];

        snapshot.docs.map((doc) => {
          this.c.push({ ...{ id: doc.id }, ...doc.data() });
          this.Courses.push({
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            price: doc.data().price,
            instructor: doc.data().instructor.name,
            category: doc.data().category,
          });
        });
      });
    },
    GetCourseDetails(id) {
      const latestQuery = query(doc(db, "Courses", id));
      onSnapshot(latestQuery, (snapshot) => {
        this.CourseDetails = { ...{ id }, ...snapshot.data() };
      });
    },
    SetEntrolled(id) {
      setDoc(doc(db, "Courses", id), {
        category: this.CourseDetails.category,
        comments: this.CourseDetails.comments,
        description: this.CourseDetails.description,
        duration: this.CourseDetails.duration,
        enrolled: parseInt(this.CourseDetails.enrolled) + 1,
        img: this.CourseDetails.img,
        instructor: this.CourseDetails.instructor,
        items: this.CourseDetails.items,
        language: this.CourseDetails.language,
        price: this.CourseDetails.price,
        sections: this.CourseDetails.sections,
        title: this.CourseDetails.title,
        quiz: this.CourseDetails.quiz,
      });
    },
    ReduceNumberOfEntrolled(id) {
      setDoc(doc(db, "Courses", id), {
        quiz: this.CourseDetails.quiz,
        category: this.CourseDetails.category,
        comments: this.CourseDetails.comments,
        description: this.CourseDetails.description,
        duration: this.CourseDetails.duration,
        enrolled: parseInt(this.CourseDetails.enrolled) - 1,
        img: this.CourseDetails.img,
        instructor: this.CourseDetails.instructor,
        items: this.CourseDetails.items,
        language: this.CourseDetails.language,
        price: this.CourseDetails.price,
        sections: this.CourseDetails.sections,
        title: this.CourseDetails.title,
      });
    },
    sendComment(id, comment) {
      setDoc(doc(db, "Courses", id), {
        quiz: this.CourseDetails.quiz,
        category: this.CourseDetails.category,
        comments: this.CourseDetails.comments.concat([comment]),
        description: this.CourseDetails.description,
        duration: this.CourseDetails.duration,
        enrolled: parseInt(this.CourseDetails.enrolled),
        img: this.CourseDetails.img,
        instructor: this.CourseDetails.instructor,
        items: this.CourseDetails.items,
        language: this.CourseDetails.language,
        price: this.CourseDetails.price,
        sections: this.CourseDetails.sections,
        title: this.CourseDetails.title,
      });
    },
    deleteComment(id, commentId) {
      setDoc(doc(db, "Courses", id), {
        quiz: this.CourseDetails.quiz,
        category: this.CourseDetails.category,
        comments: this.CourseDetails.comments.filter((c) => c.id != commentId),
        description: this.CourseDetails.description,
        duration: this.CourseDetails.duration,
        enrolled: parseInt(this.CourseDetails.enrolled),
        img: this.CourseDetails.img,
        instructor: this.CourseDetails.instructor,
        items: this.CourseDetails.items,
        language: this.CourseDetails.language,
        price: this.CourseDetails.price,
        sections: this.CourseDetails.sections,
        title: this.CourseDetails.title,
      });
    },
  },
});
