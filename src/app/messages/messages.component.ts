import { Component, OnInit } from "@angular/core";
import { Message } from "./messages.model";
import { FirebaseService } from "../shared/firebase.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData("messages").subscribe(data => {
      this.messages = Object.values(data);
      console.log(this.messages);
    });
  }
}
