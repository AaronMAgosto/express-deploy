import { db } from "./dbConnect.js";
// imported this to get timestamp (1/2)
import { FieldValue } from "firebase-admin/firestore";

const coll = db.collection("emplyees")// made this after the await so now we can just use 'coll'
//CRUD:ADD
export async function addEmployee(req, res) {
    const newEmployee = req.body
    // insert timestamp(2/2)
    newEmployee.createdAt = FieldValue.serverTimestamp()
    await db.collection("employees").add(newEmployee)
    res.status(201).send({message: "employee successfully added."})
}
//CRUD:GET
export async function getAllEmployees (req, res){
    const collection = await coll.get()
    const employees = collection.docs.map( doc =>({...doc.data(),id:doc.id}));
    res.status(201).send(employees);
}

//CRUD delete
export async function deleteEmployee(req,res) {
    const {id} = req.params;

    await coll.doc(id).delete();
    res.status(202).send("employee has been deleted")
}

//CRUD update
export async function updateEmployee(req, res) {
    const {id} = req.params
    const updateInfo = req.body

    coll.doc(id).update(updateInfo)
    res.status(202).send("employee has been upated")
}