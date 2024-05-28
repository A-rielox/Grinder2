import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
   AsyncValidatorFn,
   FormControl,
   FormGroup,
   ReactiveFormsModule,
   ValidatorFn,
   Validators,
} from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { InputComponent } from '../../shared/input/input.component';
import { AuthService, SignupCredentials } from '../auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-signup',
   standalone: true,
   imports: [CommonModule, ReactiveFormsModule, InputComponent],
   templateUrl: './signup.component.html',
   styleUrl: './signup.component.css',
})
export class SignupComponent {
   constructor(
      private matchPass: MatchPassword,
      private uniqueUsername: UniqueUsername,
      private authService: AuthService,
      private router: Router
   ) {}

   // ------------- FORM-CONTROLS
   username = new FormControl('', {
      validators: [
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(20),
         Validators.pattern(/^[a-z0-9]+$/),
      ],
      asyncValidators: this.uniqueUsername.validate as AsyncValidatorFn,
      nonNullable: true,
   });
   password = new FormControl('', {
      validators: [
         Validators.required,
         Validators.minLength(4),
         Validators.maxLength(20),
      ],
      nonNullable: true,
   });
   passwordConfirmation = new FormControl('', {
      validators: [
         Validators.required,
         Validators.minLength(4),
         Validators.maxLength(20),
      ],
      nonNullable: true,
   });

   // ------------- FORM-GROUP
   authForm = new FormGroup(
      {
         username: this.username,
         password: this.password,
         passwordConfirmation: this.passwordConfirmation,
      },
      {
         validators: [
            Validators.required,
            this.matchPass.validate as ValidatorFn, // 👈
         ],
      }
   );

   /*  p' NO tener el error q me fuerza a poner el '' uso AbstractControl
   como tipo en la fcn validate
   
   export class MatchPassword implements Validator {
   validate(formGroup: AbstractControl) {
         const { password, passwordConfirmation } = formGroup.value;
         console.log(password, passwordConfirmation);

         if (password === passwordConfirmation) {
            return null;
         } else {
            return { passwordsDontMatch: true };
         }
      }
   }

   y asi ya puedo quitar el Validators.required

   o 😎

   lo dejo como tipo FormGroup y aca pongo

   { validators: [this.matchPassword.validate as ValidatorFn] }

   */

   onSubmit() {
      if (this.authForm.invalid) {
         return;
      }

      console.log('SIGN UP FORM', this.authForm.value);
      //{username: 'lkjoiuyth', password: '1234', passwordConfirmation: '1234'}

      // en lugar de escribir el pipe con el catchError ( p' la respuesta de nombre ocupado ) pongo el {} en el subscribe p' la accion cuando venga el error
      // TENGO Q ESCRIBIRLAS COMO ARROW FCN PARA PODER OCUPAR " this "
      this.authService
         .signup(<SignupCredentials>this.authForm.value)
         .subscribe({
            next: (response) => {
               // navigate to
               // this.router.navigateByUrl('/inbox');
            },
            error: (err) => {
               // error se llama cuando hay un error en el request
               // " !err.status " es lo mismo q " err.status === 0 "
               if (!err.status) {
                  // 🟡 va a meter un error a los " errores de la form "
                  this.authForm.setErrors({ noConnection: true });
               } else {
                  this.authForm.setErrors({ unknownError: true });
               }
            },
         });
   }
}
