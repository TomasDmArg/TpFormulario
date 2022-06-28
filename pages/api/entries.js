// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDocs, addDoc, collection } from "firebase/firestore";
import { database } from "../../firebaseConfig";

export default function handler(req, res) {
  const { name, dni } = req.query;
  const ref = collection(database, 'entries');
  // Get all documents from the collection "entries"
  getDocs(ref).then(docs => {
    if(docs){
      let result = [];
      docs.docs.forEach((doc, i) => {
        result[i] = doc.data();
      })
      res.status(200).json(result);
    }
  });
}
