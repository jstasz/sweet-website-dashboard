import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Message, MessageFilter } from "./messages.model";
import { FirebaseService } from "../shared/firebase.service";
import { switchMap } from "rxjs";

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
  editedMessageId: string = "";
  @ViewChild('answerTextarea', { static: false }) answerTextarea!: ElementRef;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData("messages").subscribe(data => {
      if (data) {
        this.messages = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
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

  activateModal(messageId: string) {
    this.modalIsActive = true;
    this.editedMessageId = messageId;
  }

  onSaveButtonClick(messageId: string) {
    const newStatus = "completed";
    const answer = this.answerTextarea.nativeElement.value;

     this.firebaseService
      .updateMessage(messageId, newStatus, answer)
      .pipe(switchMap(() => this.firebaseService.getData("messages")))
      .subscribe(data => {
        this.messages = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        this.filterMessages("received");
        this.modalIsActive = false;
      });
  }
}
