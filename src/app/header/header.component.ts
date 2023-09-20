import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  navLinks: string[] = ["messages", "orders"];
}
