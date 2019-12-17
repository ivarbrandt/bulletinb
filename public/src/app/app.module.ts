import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ProjectService } from "./project.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { JoinOrCreateFamilyComponent } from './project/join-or-create-family/join-or-create-family.component';
import { MainFamilyBoardComponent } from './project/main-family-board/main-family-board.component';
import { RootfamilyComponent } from './project/rootfamily/rootfamily.component';
import { CreateFamilyComponent } from './project/create-family/create-family.component';

@NgModule({
  declarations: [AppComponent, JoinOrCreateFamilyComponent, MainFamilyBoardComponent, RootfamilyComponent, CreateFamilyComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {}
