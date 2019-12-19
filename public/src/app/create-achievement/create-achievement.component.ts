import { Component, OnInit } from "@angular/core";
import { Achievement } from "../models/achievement.interface";
import { ProjectService } from "../services/project.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { User } from "../models/user.interface";

@Component({
  selector: "app-create-achievement",
  templateUrl: "./create-achievement.component.html",
  styleUrls: ["./create-achievement.component.scss"]
})
export class CreateAchievementComponent implements OnInit {
  achievements: Achievement[] = [];
  user: User;
  newAch: Achievement = {
    category: "",
    title: "",
    description: "",
    image_url: "",
    unit_of_time: "days",
    length_of_time: 0
  };

  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = this.authService.user;
  }

  createAchievement() {
    this.projectService
      .createAchievement(this.user._id, this.newAch)
      .subscribe(data => {
        this.achievements.push(data);
        this.newAch = {
          category: "",
          title: "",
          image_url: "",
          description: "",
          unit_of_time: "days",
          length_of_time: 0
        };
        this.router.navigate(["/home"]);
      });
  }
}
