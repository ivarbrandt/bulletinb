import { Component } from "@angular/core";
import { User } from "src/app/models/user.interface";
import { Login } from "src/app/models/login.interface";
import { ProjectService } from "src/app/services/project.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  selectedUser: Login = { email: "", password: "" };
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  loginUser() {
    this.projectService.loginUser(this.selectedUser).subscribe(data => {
      console.log(data);
      this.selectedUser = { email: "", password: "" };
      this.router.navigate(["/home"]);
    });
  }
}
