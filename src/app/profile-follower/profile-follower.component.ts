import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-profile-follower",
	templateUrl: "./profile-follower.component.html",
	styleUrls: ["./profile-follower.component.sass"]
})
export class ProfileFollowerComponent implements OnInit {
	_userid: number;
	_username: string;
	_page: number;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this._userid = +this.route.snapshot.paramMap.get("id");
		this._username = this.route.snapshot.paramMap.get("username");
		this._page = +this.route.snapshot.queryParamMap.get("page");
	}

	get userid() {
		return this._userid;
	}

	get username() {
		return this._username;
	}

	get page() {
		return this._page;
	}
}
