// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDocs, addDoc, collection } from "firebase/firestore";
import { database } from "../../firebaseConfig";

export default function handler(req, res) {
    const { name, dni } = req.body;
    const ref = collection(database, 'entries');
    if(name && dni){
        // Get all documents from the collection "entries"
        addDoc(ref, { name, dni }).then(() => {
            res.status(200).json({ message: "OK" });
        });
    }else{
        res.status(400).json({ message: "Error", name: name, dni: dni });
    }
}
