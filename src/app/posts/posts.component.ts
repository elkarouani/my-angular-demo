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
	_form_setup: any;

	constructor(private http: HttpClient) {
		this._form_setup = {
			action_label: "Add",
			type: "create",
			action_style: "primary"
		};
	}

	ngOnInit() {
		this.http
			.get("https://jsonplaceholder.typicode.com/posts")
			.subscribe(response => {
				this._posts = response;
			});
	}

	get posts() {
		return this._posts;
	}
	get form_setup() {
		return this._form_setup;
	}
	init_default_post(id = "", title = "", body = "") {
		this.default_post = { id: id, title: title, body: body, userId: "" };
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
	updatePost() {
		this.http
			.put(
				"https://jsonplaceholder.typicode.com/posts/" + this.default_post.id,
				this.default_post
			)
			.subscribe(response => {
				this.init_default_post();
				console.log("%csuccess", "background: #222; color: #bada55");
			});

		this._posts.forEach((post, index) => {
			if (post.id === this.default_post.id) {
				this._posts[index] = {
					...post,
					title: this.default_post.title,
					body: this.default_post.body
				};
			}
		});
	}
	editPost(post) {
		this.init_default_post(post.id, post.title, post.body);
		this._form_setup = {
			action_label: "Update",
			type: "update",
			action_style: "danger"
		};
	}

	deletePost(selected_post) {
		this.http
			.delete("https://jsonplaceholder.typicode.com/posts/" + selected_post.id)
			.subscribe(response => {
				this.init_default_post();
				console.log("%csuccess", "background: #222; color: #bada55");
			});

		this._posts = this._posts.filter(post => {
			if (post.id !== selected_post.id) {
				return post;
			}
		});
	}
}
