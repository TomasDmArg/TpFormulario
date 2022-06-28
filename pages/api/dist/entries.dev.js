"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _firestore = require("firebase/firestore");

var _firebaseConfig = require("../../firebaseConfig");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
  var _req$query = req.query,
      name = _req$query.name,
      dni = _req$query.dni;
  var ref = (0, _firestore.collection)(_firebaseConfig.database, 'entries'); // Get all documents from the collection "entries"

  (0, _firestore.getDocs)(ref).then(function (docs) {
    if (docs) {
      var result = [];
      docs.docs.forEach(function (doc, i) {
        result[i] = doc.data();
      });
      res.status(200).json(result);
    }
  });
}