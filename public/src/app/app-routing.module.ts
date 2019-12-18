import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JoinOrCreateFamilyComponent } from "./project/join-or-create-family/join-or-create-family.component";
import { RootfamilyComponent } from "./project/rootfamily/rootfamily.component";
import { CreateFamilyComponent } from "./project/create-family/create-family.component";
import { MainPageComponent } from "./project/main-page/main-page.component";
import { RegisterComponent } from "./loginandreg/register/register.component";
import { LoginComponent } from "./loginandreg/login/login.component";

const routes: Routes = [
  { path: "home", component: MainPageComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "families",
    component: RootfamilyComponent,
    children: [
      { path: "join", component: JoinOrCreateFamilyComponent },
      { path: "new", component: CreateFamilyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
