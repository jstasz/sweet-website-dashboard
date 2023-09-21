import { Component, OnInit } from "@angular/core";
import { Message, MessageFilter } from "./messages.model";
import { FirebaseService } from "../shared/firebase.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  loading: boolean = true;
  messages: Message[] | [] = [];
  selectedMessages: Message[] = [];
  filters: MessageFilter[] = ["received", "completed"];
  selectedFilter: MessageFilter = "received";
  modalIsActive: boolean = false;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData("messages").subscribe(data => {
      if (data) {
        this.messages = Object.values(data);
      }
      this.loading = false;
      this.filterMessages("received");
    });
  }

  filterMessages(filter: MessageFilter) {
    this.selectedMessages = this.messages.filter(
      message => message.status === filter
    );
    this.selectedFilter = filter;
  }

  activateModal() {
    this.modalIsActive = !this.modalIsActive;
  }
}
