import { Component } from "@angular/core";
import { FirebaseService } from "../shared/firebase.service";
import { Order } from "./orders.model";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent {
  orders: Order[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData("orders").subscribe(data => {
      this.orders = Object.values(data);
      console.log(this.orders);
    });
  }
}
