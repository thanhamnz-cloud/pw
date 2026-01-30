self.addEventListener("push", () => {
  console.log("Push event received");
  self.registration.showNotification("[1] Push Notification", {
    body: "[2] You have received a push notification.",
  });
});
