import { Component } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      name: [
        '', 
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')] // Solo letras y espacios
      ],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const name = this.loginForm.value.name;
      const password = this.loginForm.value.password;

      let newUser: User = {
        name: name,
        password: password,
        pokemon_id: 0
      };

      localStorage.setItem("user", JSON.stringify(newUser));
      this.router.navigate(['/home-pokemon']);
    } else {
      alert('faltan campos por completar');
    }
  }
}
