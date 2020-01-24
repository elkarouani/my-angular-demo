import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { AppError } from "../common/app-errors";
import { NotFoundError } from "../common/not-found-errors";
import { BadInput } from "../common/bad-inputs";

@Injectable({
	providedIn: "root"
})
export class PostsService {
	private _url: string = "https://jsonplaceholder.typicode.com/posts";

	constructor(private http: HttpClient) {}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 404) {
			return throwError(new NotFoundError());
		}
		if (error.status === 400) {
			return throwError(new BadInput());
		}
		return throwError(new AppError());
	}

	get_posts_from_service() {
		return this.http.get(this._url).pipe(catchError(this.handleError));
	}

	createPost(posted_post) {
		return this.http
			.post(this._url, posted_post)
			.pipe(catchError(this.handleError));
	}

	updatePost(putted_post) {
		return this.http
			.put(this._url + "/" + putted_post.id, putted_post)
			.pipe(catchError(this.handleError));
	}

	deletePost(deleted_post) {
		return this.http
			.delete(this._url + "/" + deleted_post.id)
			.pipe(catchError(this.handleError));
	}
}
