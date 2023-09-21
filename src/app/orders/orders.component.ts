import { Component } from "@angular/core";
import { FirebaseService } from "../shared/firebase.service";
import { Order, OrderFilter } from "./orders.model";
import { switchMap } from "rxjs";

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
        this.orders = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
      }
      this.loading = false;
      this.filterOrders("received");
    });
  }

  filterOrders(filter: OrderFilter) {
    this.selectedOrders = this.orders.filter(order => order.status === filter);
    this.selectedFilter = filter;
  }

  onMarkButtonClick(orderId: string) {
    const newStatus: "in progress" | "completed" =
      this.selectedFilter === "received" ? "in progress" : "completed";

    this.firebaseService
      .updateOrder(orderId, newStatus)
      .pipe(switchMap(() => this.firebaseService.getData("orders")))
      .subscribe(data => {
        this.orders = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        this.filterOrders(this.selectedFilter);
      });
  }
}
