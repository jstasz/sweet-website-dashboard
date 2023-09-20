import { Component } from "@angular/core";
import { FirebaseService } from "../shared/firebase.service";
import { Order, OrderFilter } from "./orders.model";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent {
  loading: boolean = true;
  filters: OrderFilter[] = ["received", "in progress", "completed"];
  selectedFilter: OrderFilter = "received";
  orders: Order[] | [] = [];
  selectedOrders: Order[] | [] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData("orders").subscribe(data => {
      if (data) {
        this.orders = Object.values(data);
      }
      this.loading = false;
      this.filterOrders("received");
    });
  }

  filterOrders(filter: OrderFilter) {
    this.selectedOrders = this.orders.filter(order => order.status === filter);
    this.selectedFilter = filter;
  }
}
