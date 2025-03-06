importScripts(
  "https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js"
)
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.2/firebase-messaging-compat.js"
)

firebase.initializeApp({
  apiKey: "AIzaSyBzZtznh_7655e0Wd8gUtBj_2vhRmujVa8",
  authDomain: "mexc-89c96.firebaseapp.com",
  projectId: "mexc-89c96",
  storageBucket: "mexc-89c96.firebasestorage.app",
  messagingSenderId: "965448528457",
  appId: "1:965448528457:web:467c66c5927edf03460598",
  measurementId: "G-6J7279WBYR",
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log("Background message:", payload)
  if (payload.data) {
    const { title, body, icon } = payload.data
    self.registration.showNotification(title, {
      body,
      icon,
    })
  }
})
