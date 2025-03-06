import { initializeApp } from "firebase/app"
import { getMessaging, getToken, onMessage } from "firebase/messaging"
const firebaseConfig = {
  apiKey: "AIzaSyBzZtznh_7655e0Wd8gUtBj_2vhRmujVa8",
  authDomain: "mexc-89c96.firebaseapp.com",
  projectId: "mexc-89c96",
  storageBucket: "mexc-89c96.firebasestorage.app",
  messagingSenderId: "965448528457",
  appId: "1:965448528457:web:467c66c5927edf03460598",
  measurementId: "G-6J7279WBYR",
}

const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

// Hàm yêu cầu quyền nhận thông báo
export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission()
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BOmIeirrve8JfZVuiJw7tFOJLrZlefndTJ631XiY5BUXnwtgAHxJle-EDSn4wb5BewXtQqKyaatnWBc7WvOKZeo",
    })
    console.log("FCM Token:", token)
    localStorage.setItem("fcm_token", token)
    return token
  } else {
    console.log("Người dùng từ chối nhận thông báo")
    return null
  }
}

// Lắng nghe tin nhắn khi app đang mở
onMessage(messaging, (payload) => {
  console.log("Thông báo nhận được:", payload)
  if (Notification.permission === "granted" && payload.data) {
    const { title, body, icon } = payload.data
    // Tự tạo thông báo với nội dung bạn muốn
    new Notification(title, { body, icon })
  }
})
