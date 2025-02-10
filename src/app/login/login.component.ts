import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { PrimeNG } from 'primeng/config';
import { Router } from '@angular/router';
import { FormValidatorComponent } from '../form-validator/form-validator.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule,FormValidatorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent implements OnInit {
  constructor(private primeng: PrimeNG, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  onSubmit() {

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    if (email?.includes('admin') && password === '1234') {
      localStorage.setItem('islogin', 'true');
      this.router.navigate(['/product']); //add correct
    }


  }


  ngOnInit() {
    if (localStorage.getItem('islogin')) {
      this.router.navigate(['/product']);
    }
  }
}
