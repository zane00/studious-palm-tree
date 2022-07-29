import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    username: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', Validators.required),
    password: new UntypedFormControl('', Validators.required),
  });

  faUser = faUser;
  faKey = faKey;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
  }

}
