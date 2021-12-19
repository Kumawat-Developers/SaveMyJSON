import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit(): void {}
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
