import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { OrdersComponent } from "./orders/orders.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "messages", pathMatch: "full" },
  { path: "messages", component: MessagesComponent },
  { path: "orders", component: OrdersComponent }
  // { path: "not-found", component: PageNotFoundComponent },
  // { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
