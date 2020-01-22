import { Component, OnInit } from '@angular/core'; @Component({ selector:
'contact-form', templateUrl: './contact-form.component.html', styleUrls:
['./contact-form.component.sass'] }) export class ContactFormComponent
implements OnInit { constructor() { } ngOnInit() { } log(firstName) {
console.log(firstName); } submit(f) { console.log(f); } }
