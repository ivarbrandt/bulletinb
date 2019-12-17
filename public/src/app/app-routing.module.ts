import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JoinOrCreateFamilyComponent } from "./project/join-or-create-family/join-or-create-family.component";

const routes: Routes = [
  { path: "joinorcreate", component: JoinOrCreateFamilyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
