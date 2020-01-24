import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
	constructor(private route: Router) {}

	ngOnInit() {}

	ajouter() {
		this.route.navigate(["followers", 1, "KDragon"], {
			queryParams: { page: 12, type: "Admin" }
		});
	}
}
