import { CoursesService } from "./courses.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { ResumePipe } from "./resume.pipe";
import { FavoriteComponent } from "./favorite/favorite.component";
import { PanelComponent } from "./panel/panel.component";
import { InputFormatDirective } from "./input-format.directive";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PostsComponent } from "./posts/posts.component";
import { PostsService } from "./services/posts.service";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProfileFollowerComponent } from "./profile-follower/profile-follower.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		CourseComponent,
		ResumePipe,
		FavoriteComponent,
		PanelComponent,
		InputFormatDirective,
		ContactFormComponent,
		SignupFormComponent,
		PostsComponent,
		GithubFollowersComponent,
		HomeComponent,
		PageNotFoundComponent,
		ProfileFollowerComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [CoursesService, PostsService],
	bootstrap: [AppComponent]
})
export class AppModule {}
