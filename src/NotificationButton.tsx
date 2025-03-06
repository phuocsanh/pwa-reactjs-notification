import { useState } from "react"
import { requestNotificationPermission } from "./firebase" // hàm này thực hiện việc yêu cầu quyền

const NotificationButton = () => {
  const [fcmToken, setFcmToken] = useState("")
  const handleEnableNotifications = async () => {
    const token = await requestNotificationPermission()
    if (token) {
      setFcmToken(token)
      console.log("FCM Token:", token)
    } else {
      console.log("Người dùng từ chối cấp quyền thông báo")
    }
  }

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f0f0f0",
        maxWidth: "300px",
        margin: "0 auto",
        wordWrap: "normal",
      }}
    >
      <button onClick={handleEnableNotifications}>Bật Thông Báo</button>
      {fcmToken && (
        <div>
          <p>
            <strong>FCM Token:</strong>
          </p>
          <p style={{ overflowWrap: "break-word" }}>{fcmToken}</p>
        </div>
      )}
    </div>
  )
}

export default NotificationButton
