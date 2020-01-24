import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "./global.service";

@Injectable({
	providedIn: "root"
})
export class GithubFollowersService extends GlobalService {
	constructor(http: HttpClient) {
		super(http, "https://api.github.com/users/elkarouani/followers");
	}
}
