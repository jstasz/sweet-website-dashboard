import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MessagesComponent } from "./messages/messages.component";
import { OrdersComponent } from "./orders/orders.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.model";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    OrdersComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
