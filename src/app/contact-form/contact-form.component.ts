import { Component, OnInit } from '@angular/core'; @Component({ selector:
'contact-form', templateUrl: './contact-form.component.html', styleUrls:
['./contact-form.component.sass'] }) export class ContactFormComponent
implements OnInit { ContactMethods = [{ id: 1, name: 'email' }, { id: 2, name:
'telephone' }, {id: 3, name: 'sms'}]; constructor() { } ngOnInit() { }
log(firstName) { console.log(firstName); } submit(f) { console.log(f); } }
