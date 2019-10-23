window.onload = function (e) {

  var firebaseConfig = {
    apiKey: "AIzaSyBojqefOzqaxQTLvQSjVikDWNGeT_F62nY",
    authDomain: "fleet-line-sample.firebaseapp.com",
    databaseURL: "https://fleet-line-sample.firebaseio.com",
    projectId: "fleet-line-sample",
    storageBucket: "fleet-line-sample.appspot.com",
    messagingSenderId: "169498183895",
    appId: "1:169498183895:web:889550fbd1e2d5eae78892",
    measurementId: "G-Q7WVTE7JE9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  liff.init(function (data) {
    getProfile();
  });





// プロファイルの取得と表示
function getProfile(){

    liff.getProfile().then(function (profile) {
      db.collection(profile.userId).get().then((query) => {
        var buff = [];
        query.forEach((doc) => {
          var data = doc.data();
          var drive = document.createElement("div")
          drive.innerHTML = data.datetime.toDate() + "    " + data.name
          document.getElementById("driving-record").appendChild(drive)
        });
      })
      .catch((error)=>{
        console.log(`データの取得に失敗しました (${error})`);
      });
    }).catch(function (error) {
        window.alert("Error getting profile: " + error);
    });



}

}
