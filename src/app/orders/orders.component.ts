import { Component } from "@angular/core";
import { FirebaseService } from "../shared/firebase.service";
import { Order } from "./orders.model";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent {
  orders: Order[] | [] = [];
  loading: boolean = true;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData("orders").subscribe(data => {
      if (data) {
        this.orders = Object.values(data);
      }
      this.loading = false;
    });
  }
}
