import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'superFinal';
  loginForm!: FormGroup;

  get userId() {
    return this.loginForm.get('userId') as FormControl;
}

  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService // Injecting the AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userId = this.loginForm.get('userId')!.value;
      const password = this.loginForm.get('password')!.value;
      
      // Check the credentials using the service
      if (this.authService.checkCredentials(userId, password)) {
        alert('Authenticated');
      } else {
        alert('Incorrect userId or password');
      }
    }
  }
}

