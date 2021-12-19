import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"],
})
export class FAQComponent implements OnInit {
  header: any = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getFAQ();
  }

  getFAQ() {
    this.appService.getFAQ().subscribe((data) => {
      this.header = data;
      console.log(this.header);
    });
  }
}
