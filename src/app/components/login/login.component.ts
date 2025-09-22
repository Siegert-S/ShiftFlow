import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MyInputComponent } from "../my-input/my-input.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MyInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  private auth = inject(AuthService)

  form = new FormGroup({
    email: new FormControl<string>('', { validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$')], nonNullable: true }),
    password: new FormControl<string>('', { validators: [Validators.required,], nonNullable: true })
  });

  // get loginError(): string {
  //   if (this.auth.loginError != null) {
  //     return this.auth.loginError;
  //   } else {
  //     return '';
  //   }
  // }

  get loginError(): string {
    const err = this.auth.loginError();
    if (err != null) {
      return err;
    } else {
      return '';
    }
  }

  submit() {
    const { email, password } = this.form.value;

    console.log(this.form);

    console.log('Form values:', this.form.value);
    console.log('Form valid:', this.form.valid);

    if (email && password) {
      this.auth.login(email, password);
    }
    // this.auth.login(this.form.value.username, this.form.value.password);
  }
}
