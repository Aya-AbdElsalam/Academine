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
export const BlogStore = defineStore("Blog", {
  state: () => ({ Blog: undefined, BlogDetails: undefined }),
  getters: {},
  actions: {
    GetBlog() {
      const latestQuery = query(collection(db, "Blog"));
      onSnapshot(latestQuery, (snapshot) => {
        this.Blog = [];

        snapshot.docs.map((doc) => {
          this.Blog.push({
            id: doc.id,
            comments: doc.data().comments,
            date: doc.data().date,
            title: doc.data().title,
            img: doc.data().img,
            txt: doc.data().txt,
          });
        });
      });
    },
    GetBlogDetails(id) {
      const latestQuery = query(doc(db, "Blog", id));
      onSnapshot(latestQuery, (snapshot) => {
        this.BlogDetails = snapshot.data();
      });
    },
    sendComment(id, comment) {
      setDoc(doc(db, "Blog", id), {
        id: id,
        comments: this.BlogDetails.comments.concat([comment]),
        date: this.BlogDetails.date,
        title: this.BlogDetails.title,
        img: this.BlogDetails.img,
        txt: this.BlogDetails.txt,
      });
    },
    deleteComment(id, commentId) {
      setDoc(doc(db, "Blog", id), {
        id: id,
        comments: this.BlogDetails.comments.filter((c) => c.id != commentId),
        date: this.BlogDetails.date,
        title: this.BlogDetails.title,
        img: this.BlogDetails.img,
        txt: this.BlogDetails.txt,
      });
    },
  },
});
