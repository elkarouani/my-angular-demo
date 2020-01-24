import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";
import { AppError } from "../common/app-errors";
import { NotFoundError } from "../common/not-found-errors";
import { BadInput } from "../common/bad-inputs";
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

	ngOnInit() {
		this.postsService.get_posts_from_service().subscribe(
			response => {
				this._posts = response;
			},
			error => {
				alert("erreur inattendue");
			}
		);
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
		this.postsService.createPost(this.default_post).subscribe(
			response => {
				let created_post = response;
				this._posts.push(created_post);
				this.init_default_post();
			},
			(error: AppError) => {
				if (error instanceof BadInput) {
					alert("merci de verifié vos informations !!");
				} else {
					alert("erreur inattendue");
				}
			}
		);
	}

	updatePostAction() {
		this.postsService.updatePost(this.default_post).subscribe(
			response => {
				this._posts.forEach((post, index) => {
					if (post.id === this.default_post.id) {
						this._posts[index] = {
							...post,
							title: this.default_post.title,
							body: this.default_post.body
						};
					}
				});
				this.init_default_post();
			},
			(error: AppError) => {
				if (error instanceof NotFoundError) {
					alert("ce post est non existe !!");
				} else if (error instanceof BadInput) {
					alert("merci de verifié vos informations !!");
				} else {
					alert("erreur inattendue");
				}
			}
		);
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
		this.postsService.deletePost(selected_post).subscribe(
			response => {
				this._posts = this._posts.filter(post => {
					if (post.id !== selected_post.id) {
						return post;
					}
				});
			},
			(error: AppError) => {
				if (error instanceof NotFoundError) {
					alert("ce post est non existe !!");
				} else {
					alert("erreur inattendue");
				}
			}
		);
	}
}
