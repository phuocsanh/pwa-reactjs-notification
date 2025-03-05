import { useEffect, useState } from "react"
import "./App.css"
import { requestNotificationPermission } from "./firebase"

requestNotificationPermission().then((token) => {
  if (token) {
    console.log("FCM Token:", token)
  }
})

// Đăng ký service worker của Firebase
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker đăng ký thành công:", registration)
    })
    .catch((error) => {
      console.error("Đăng ký Service Worker thất bại:", error)
    })
}

function App() {
  const [fcmToken, setFcmToken] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("fcm_token") // ✅ Lấy token từ localStorage
    if (token) {
      setFcmToken(token)
    }
  }, [])
  return (
    <>
      <div>
        <h1>FCM Token:</h1>
        {fcmToken ? <p>{fcmToken}</p> : <p>Chưa có FCM Token</p>}
      </div>
    </>
  )
}

export default App
