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

let sub = {};
push.sendNotification(sub, "Your Push Payload Text").catch((err) => {
  console.error(err.stack);
});
