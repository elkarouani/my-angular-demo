import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "./global.service";

@Injectable({
	providedIn: "root"
})
export class PostsService extends GlobalService {
	constructor(http: HttpClient) {
		super(http, "https://jsonplaceholder.typicode.com/posts");
	}
}
