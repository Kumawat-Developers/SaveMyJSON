import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public todayQuote: string;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getQuotes();
  }
  getQuotes() {
    this.appService.getQuotes().subscribe((data) => {
      this.todayQuote = data[0].q;
      console.log(this.todayQuote);
    });
  }
}
