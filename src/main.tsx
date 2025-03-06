import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { registerSW } from "virtual:pwa-register"
// import { useRegisterSW } from "virtual:pwa-register/react"
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("Có bản cập nhật mới, bạn có muốn tải lại?")) {
      updateSW(true)
    }
  },
  onOfflineReady() {
    console.log("PWA đã sẵn sàng để sử dụng offline!")
  },
})

// const updatePromptShown =
//   localStorage.getItem("updatePromptShown") === "true" ? true : false

// const updateSW = registerSW({
//   onNeedRefresh() {
//     if (!updatePromptShown) {
//       if (confirm("Có bản cập nhật mới, bạn có muốn tải lại?")) {
//         updateSW(true)
//       }
//       localStorage.setItem("updatePromptShown", "true")
//     }
//   },
//   onOfflineReady() {
//     console.log("PWA đã sẵn sàng để sử dụng offline!")
//   },
// })
// Đăng ký Firebase service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Firebase Service Worker đăng ký thành công:", registration)
    })
    .catch((error) => {
      console.error("Firebase Service Worker lỗi:", error)
    })
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
