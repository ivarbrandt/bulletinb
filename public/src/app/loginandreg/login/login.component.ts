import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.interface";
import { Login } from "src/app/models/login.interface";
import { ProjectService } from "src/app/services/project.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})


export class LoginComponent implements OnInit {
  selectedUser: Login = { email: "", password: "" };
  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.selectedUser = { email: "", password: "" };
  }
  loginUser() {
    this.authService.loginUser(this.selectedUser);
  }
}
