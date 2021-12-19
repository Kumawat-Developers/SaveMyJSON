import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { FAQComponent } from "./faq/faq.component";
import { MyjsonComponent } from "./myjson/myjson.component";
import { NewjsonComponent } from "./newjson/newjson.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  // {
  //   path: 'newjson',

  //   component: NewjsonComponent
  // },
  {
    path: "",
    component: NewjsonComponent,
  },

  {
    path: "app",
    children: [
      { path: "newjson", component: NewjsonComponent },
      { path: "aboutus", component: AboutusComponent },
      { path: "faq", component: FAQComponent },

      {
        path: "myjson/:id",
        component: MyjsonComponent,
      },

      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },

  // {
  //   path: 'myjson/:id',
  //   component: MyjsonComponent
  // },
  // {
  //   path: '**',

  //   component: NotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
