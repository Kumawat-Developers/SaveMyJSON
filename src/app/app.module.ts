import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ToggleButtonModule } from "primeng/togglebutton";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { NgJsonEditorModule } from "ang-jsoneditor";
import { MyjsonComponent } from "./myjson/myjson.component";
import { NewjsonComponent } from "./newjson/newjson.component";
import { ClipboardModule } from "ngx-clipboard";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { ToastModule } from "primeng/toast";
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NotificationService } from "./shared/notification.service";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";
import { AboutusComponent } from './aboutus/aboutus.component';
import {AccordionModule} from 'primeng/accordion';
import { FAQComponent } from './faq/faq.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    MyjsonComponent,
    NewjsonComponent,
    NotFoundComponent,
    AboutusComponent,
    FAQComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToggleButtonModule,
    FormsModule,
    ButtonModule,
    NgJsonEditorModule,
    ClipboardModule,
    NgxUiLoaderModule,
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    AccordionModule,
    CardModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
  providers: [
    NotificationService,
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: "6Lc6KFcbAAAAADmZ84tFI2bvmLRd6arxKvOLLisr",
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
