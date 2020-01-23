import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class PostsService {
	private _url: string = "https://jsonplaceholder.typicode.com/posts";

	constructor(private http: HttpClient) {}

	async get_posts_from_service() {
		let result: any;

		result = await this.http.get(this._url).toPromise();

		return result ? result : null;
	}

	createPost(posted_post) {
		let result: any;

		this.http.post(this._url, posted_post).subscribe(response => {
			result = response;
		});

		return result;
	}

	updatePost(putted_post) {
		let result: boolean;

		this.http
			.put(this._url + "/" + putted_post.id, putted_post)
			.subscribe(response => {
				result = true;
				console.log("%csuccess", "background: #222; color: #bada55");
			});

		return result;
	}

	deletePost(deleted_post) {
		let result: boolean;

		this.http.delete(this._url + "/" + deleted_post.id).subscribe(response => {
			result = true;
			console.log("%csuccess", "background: #222; color: #bada55");
		});

		return result;
	}
}
