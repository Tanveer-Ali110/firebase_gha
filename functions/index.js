import functions from "firebase-functions";


export default functions.https.onRequest({ cors: true }, (req, res) => {
    console.log("test")
})