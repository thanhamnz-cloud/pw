var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BCgDjhRu1tNKi3PMAitP0oE09jOylZFdzp_QJ3ZvIRhgXDDJxYAiqVoO6KMrEpTAfEm68XYI4-GePelXlLgykwI",
  privateKey: "NhwN46y0ov5CFP6nzGxKhzRDT2kB6f3T8Qt3hf-yGIE",
};

push.setVapidDetails(
  "mailto: test@abc.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fKOhxIXx3Kw:APA91bEE6vW0hnZl_R_Qgfd514EOlBTbcIh-E_wa89i387ngpLq-yjj2RQ9oxAyS6WlM9THnK9ShOvra8BKS6RLLp_xOed4Q_I11UMcI_KE0rPMVWkYZPu-d02V4yboT-A7SWjYGYsbn",
  expirationTime: null,
  keys: {
    p256dh:
      "BM89x3etahEVMuBtVMIROvpEmWT8_4m7xn8vFBjHNNdu5qsw8xBVq8gQw1uD4CZDsbOvpQcu83Nd942v3tAz-UY",
    auth: "pOSv73JFRjoZsLy1r82C3g",
  },
};
push.sendNotification(sub, "Your Push Payload Text").catch((err) => {
  console.error(err.stack);
});
