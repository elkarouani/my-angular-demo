import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {
	static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
		if ((<string>control.value).indexOf(" ") >= 0) {
			return {
				cannotContainSpace: true
			};
		}

		return null;
	}
}
