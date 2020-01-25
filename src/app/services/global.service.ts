import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { NotFoundError } from "../common/not-found-errors";
import { BadInput } from "../common/bad-inputs";
import { AppError } from "../common/app-errors";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export class GlobalService {
	constructor(private http: HttpClient, private _url: string) {}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 404) {
			return throwError(new NotFoundError());
		}
		if (error.status === 400) {
			return throwError(new BadInput());
		}
		return throwError(new AppError());
	}

	get_all_from_service() {
		return this.http.get(this._url).pipe(catchError(this.handleError));
	}

	create(resource) {
		return this.http
			.post(this._url, resource)
			.pipe(catchError(this.handleError));
	}

	update(resource) {
		return this.http
			.put(this._url + "/" + resource.id, resource)
			.pipe(catchError(this.handleError));
	}

	delete(resource) {
		return this.http
			.delete(this._url + "/" + resource.id)
			.pipe(catchError(this.handleError));
	}
}
