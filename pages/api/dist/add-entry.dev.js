"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _firestore = require("firebase/firestore");

var _firebaseConfig = require("../../firebaseConfig");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      dni = _req$body.dni;
  var ref = (0, _firestore.collection)(_firebaseConfig.database, 'entries');

  if (name && dni) {
    // Get all documents from the collection "entries"
    (0, _firestore.addDoc)(ref, {
      name: name,
      dni: dni
    }).then(function () {
      res.status(200).json({
        message: "OK"
      });
    });
  } else {
    res.status(400).json({
      message: "Error",
      name: name,
      dni: dni
    });
  }
}