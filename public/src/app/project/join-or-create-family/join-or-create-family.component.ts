import { Component, OnInit } from "@angular/core";
import { Family } from "src/app/models/family.interface";
import { ProjectService } from "src/app/services/project.service";

@Component({
  selector: "app-join-or-create-family",
  templateUrl: "./join-or-create-family.component.html",
  styleUrls: ["./join-or-create-family.component.scss"]
})
export class JoinOrCreateFamilyComponent implements OnInit {
  families: Family[] = [];
  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.getAllFamilies();
  }
  getAllFamilies() {
    this.projectService.getAllFamilies().subscribe(data => {
      this.families = data;
    });
  }
}
