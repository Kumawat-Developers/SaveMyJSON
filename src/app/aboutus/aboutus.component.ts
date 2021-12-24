import { Component, OnInit } from "@angular/core";
import { SeoService } from "../seo.service";

@Component({
  selector: "app-aboutus",
  templateUrl: "./aboutus.component.html",
  styleUrls: ["./aboutus.component.css"],
})
export class AboutusComponent implements OnInit {
  fullname: string;
  phone: string;
  message: string;
  subject: string;
  constructor( private seo: SeoService) {}

  ngOnInit(): void {
    this.setSEO();
  }
  setSEO() {
    this.seo.generateTags({
      title: "AboutUs | SaveMyJson’s",
      description: "Kumawat is Service and Product base opensource company provide free product and services. Welcome to SaveMyJson your number one source for all things SaveMyJson. We're dedicated to giving you the very best of SaveMyJson, with a focus on OpenSource project. Founded in 2019 by Kumawat Team, SaveMyJson has come a long way from its beginnings in India. When Kumawat Team first started out,passion for opensource drove them so that SaveMyJson can offer you . We now serve customers all over [place - town, country, the world], and are thrilled that we're able to turn our passion into [my/our] own website. we hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us. Sincerely, Kumawat Team",
    });
  }
  submit() {
    window.open();

    var fullBody =
      "Full Name : " +
      this.fullname +
      "</br> Phone No : " +
      this.phone +
      "</br> message </br>" +
      this.message;
    window.open(
      "mailto:kamleshknskumawat@gmail.com?subject=" +
        this.subject +
        "&body=" +
        fullBody +
        ""
    );
  }
}
