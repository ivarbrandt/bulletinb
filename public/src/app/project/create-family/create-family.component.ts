import { Component } from "@angular/core";
import { Family } from "src/app/models/family.interface";

@Component({
  selector: "app-create-family",
  templateUrl: "./create-family.component.html",
  styleUrls: ["./create-family.component.scss"]
})
export class CreateFamilyComponent {
  newFamily: Family = { name: "" };
  constructor() {}
}
