import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { SeoService } from "../seo.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"],
})
export class FAQComponent implements OnInit {
  header: any = [];

  constructor(private appService: AppService, private seo: SeoService) {}

  ngOnInit(): void {
    this.setSEO();
    this.getFAQ();
    this.seo.setCanonicalURL();
  }
  setSEO() {
    this.seo.generateTags({
      title: "SaveMyJson’s FAQ",
      description: "FAQ of SaveMyJson",
    });
  }
  getFAQ() {
    this.appService.getFAQ().subscribe((data) => {
      this.header = data;
      console.log(this.header);
    });
  }
}
