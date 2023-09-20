import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  private databaseUrl = "https://sweet-website-contact-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient) {}

  getData(data: "orders" | "messages"): Observable<any> {
    const url = `${this.databaseUrl}/${data}.json`;

    return this.http.get(url);
  }
}