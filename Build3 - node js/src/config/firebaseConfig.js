/*var admin = require("firebase-admin");

var serviceAccount = require('./ServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-andries-crud-app-default-rtdb.firebaseio.com/"
  //"https://build3-belongeducation-default-rtdb.firebaseio.com"
});

module.exports = admin;*/

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-andries-crud-app-default-rtdb.firebaseio.com"
});
