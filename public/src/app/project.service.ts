import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/models/user.interface";
import { Family } from "src/app/models/family.interface";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  getAllFamilies() {
    return this.http.get<Family[]>("/api/families");
  }
}
