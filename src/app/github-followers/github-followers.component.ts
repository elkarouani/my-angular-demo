import { Component, OnInit } from "@angular/core";
import { GithubFollowersService } from "../services/github-followers.service";

@Component({
	selector: "github-followers",
	templateUrl: "./github-followers.component.html",
	styleUrls: ["./github-followers.component.sass"]
})
export class GithubFollowersComponent implements OnInit {
	_followers: any;

	constructor(private service: GithubFollowersService) {}

	ngOnInit() {
		this.service
			.get_all_from_service()
			.subscribe(followers => (this._followers = followers));
	}

	get followers() {
		return this._followers;
	}
}
