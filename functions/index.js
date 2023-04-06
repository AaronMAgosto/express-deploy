import functions  from "firebase-functions";
import express from "express"
import cors from "cors"
import { addEmployee, getAllEmployees, deleteEmployee, updateEmployee } from "./src/employees.js";

const app = express()
app.use(cors())
app.use(express.json()) // needed or post and patch

app.get("/test", (req, res) => {
    res.send("My cloud function api is working!🥹")
})
app.post("/employees", addEmployee)

app.get("/employees", getAllEmployees)

app.delete("/employees", deleteEmployee)

app.patch("/ employees", updateEmployee)

export const api = functions.https.onRequest(app)


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
