import { DOCUMENT } from "@angular/common";
import { Component, Inject, ViewChild } from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";
import { MessageService } from "primeng/api";
import { SeoService } from "./seo.service";
import { AppModel, AppStatus } from "./shared/appModel";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [MessageService],
})
export class AppComponent {
  public editorOptions: JsonEditorOptions;
  public editorOption: JsonEditorOptions;
  public data: any;
  public newData: any;
  public json: string;
  public appModel: AppModel;
  public appStatus: AppStatus;
  public appData: any;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
  @ViewChild(JsonEditorComponent, { static: true })
  editorr: JsonEditorComponent;
  constructor(
    private messageService: MessageService,
    private seo: SeoService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.appModel = new AppModel();
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ["code", "text", "tree", "view"];
    this.editorOption = new JsonEditorOptions();
    this.editorOption.modes = ["code", "text", "tree", "view"];


    setTimeout(() => {
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Order submitted",
      });
    }, 1000);
    let link: HTMLLinkElement = this.document.createElement("link");
    link.setAttribute("rel", "canonical");
    this.document.head.appendChild(link);
    link.setAttribute("href", this.document.URL);
    this.seo.setCanonicalURL();
  }
}
