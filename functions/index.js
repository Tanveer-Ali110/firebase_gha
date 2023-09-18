import { functions } from "firebase-functions";

// import admin from "firebase-admin";

// admin.initializeApp();


export const test = functions.https.onRequest({ cors: true }, (req, res) => {
    console.log("test", req.body)
})