import { Injectable, Inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";
@Injectable({
  providedIn: "root",
})
export class SeoService {
  constructor(
    private meta: Meta,
    @Inject(DOCUMENT) private dom,
    private title: Title
  ) {}

  generateTags(config) {
    config = {
      title: "SaveMyJson online free for testing web services",
      description:
        "SaveMyJson provide free save your JSON object and you can consume services any time.",
      image: "https://savemyjson.kumawat.co.in/assets/icons/icon-128x128.png",
      slug: "",
      ...config,
    };
    /* Twitter Card Tag */
    this.meta.updateTag({ property: "twitter:card", content: "summary" });
    this.meta.updateTag({ property: "twitter:site", content: "@kamleshkns" });
    this.meta.updateTag({ property: "og:title", content: config.title });
    this.meta.updateTag({
      property: "og:description",
      content: config.description,
    });
    this.meta.updateTag({ property: "twitter:image", content: config.image });

    /* Facebook OpenGraph Tags */
    this.meta.updateTag({ property: "og:type", content: "article" });
    this.meta.updateTag({ property: "og:site_name", content: "SaveMyJson" });

    /* Meta Tags */

    this.title.setTitle(config.title);
    this.meta.updateTag({name: "title",content: config.title});
    this.meta.updateTag({name: "description",content: config.description});
  }

  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URL : url;
    const link: HTMLLinkElement = this.dom.createElement("link");
    link.setAttribute("rel", "canonical");
    this.dom.head.appendChild(link);
    link.setAttribute("href", canURL);
  }
}
