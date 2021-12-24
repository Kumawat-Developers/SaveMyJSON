import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/Rx";
@Injectable({
  providedIn: "root",
})
export class AppService {
  newUrl = "https://thread-frost-buffet.glitch.me/";
  quotesUrl = "https://zenquotes.io/api/today";
  constructor(private httpClient: HttpClient) {}
  saveJson(data): Observable<any> {
    return this.httpClient
      .post(this.newUrl + "save", data)
      .map((response: Response) => {
        return response;
      });
  }
  findJson(data): Observable<any> {
    return this.httpClient
      .get(this.newUrl + "find?id=" + data)
      .map((response: Response) => {
        return response;
      });
  }
  getQuotes(): Observable<any> {
    return this.httpClient
      .get(this.newUrl + "quotes")
      .map((response: Response) => {
        return response;
      });
  }

  getFAQ(): Observable<any> {
    return this.httpClient
      .get(
        "https://bafkreibxkhlr6smiwekgrfzbgyk4ku3fd22j52idid7zm7utkfx3rjmjna.ipfs.dweb.link/"
      )
      .map((response: Response) => {
        return response;
      });
  }
}
