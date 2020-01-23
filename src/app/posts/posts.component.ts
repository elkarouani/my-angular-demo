import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";
@Component({
	selector: "app-posts",
	templateUrl: "./posts.component.html",
	styleUrls: ["./posts.component.sass"]
})
export class PostsComponent implements OnInit {
	_posts: any;
	default_post: any = { id: 0, title: "", body: "", userId: "" };
	_form_setup: any;

	constructor(private postsService: PostsService) {
		this._form_setup = {
			action_label: "Add",
			type: "create",
			action_style: "primary"
		};
	}

	async ngOnInit() {
		this._posts = await this.postsService.get_posts_from_service();
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

	createPostAction() {
		this.init_default_post();
		this._posts.push(this.postsService.createPost(this.default_post));
	}

	updatePostAction() {
		this.init_default_post();
		if (this.postsService.updatePost(this.default_post)) {
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
		this.init_default_post();
		if (this.postsService.deletePost(selected_post)) {
			this._posts = this._posts.filter(post => {
				if (post.id !== selected_post.id) {
					return post;
				}
			});
		}
	}
}
