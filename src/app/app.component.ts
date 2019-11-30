import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAfiIn6nSG46JWSdsmGDtfhF7wKeIcY6gw",
      authDomain: "booksopenclassroom.firebaseapp.com",
      databaseURL: "https://booksopenclassroom.firebaseio.com",
      projectId: "booksopenclassroom",
      storageBucket: "booksopenclassroom.appspot.com",
      messagingSenderId: "778407180084",
      appId: "1:778407180084:web:77ee09137afd674f8a5761",
      measurementId: "G-KG9ZXMVY9J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
