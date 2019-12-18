import { Component } from "@angular/core";
import { User } from "src/app/models/user.interface";
import { ProjectService } from "src/app/services/project.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  newUser: User = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: new Date()
  };
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  createUser() {
    this.projectService.createUser(this.newUser).subscribe(data => {
      console.log(data);
      this.newUser = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        dob: new Date()
      };
    });
    this.router.navigate(["/home"]);
  }
}
