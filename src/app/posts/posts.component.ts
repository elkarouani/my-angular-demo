import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
	selector: "app-posts",
	templateUrl: "./posts.component.html",
	styleUrls: ["./posts.component.sass"]
})
export class PostsComponent implements OnInit {
	_posts: any;
	default_post: any = { id: 0, title: "", body: "", userId: "" };
	constructor(private http: HttpClient) {
		this.http
			.get("https://jsonplaceholder.typicode.com/posts")
			.subscribe(response => {
				this._posts = response;
			});
	}
	ngOnInit() {}
	get posts() {
		return this._posts;
	}
	init_default_post() {
		this.default_post = { id: 0, title: "", body: "", userId: "" };
	}
	createPost() {
		this.http
			.post("https://jsonplaceholder.typicode.com/posts", this.default_post)
			.subscribe(response => {
				console.log(response); // this.default_post = response;
				this._posts.push(response);
				this.init_default_post();
			});
	}
}
