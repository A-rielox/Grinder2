import { Component } from '@angular/core';
import {
   AsyncValidatorFn,
   FormControl,
   FormGroup,
   Validators,
} from '@angular/forms';

interface SignupCredentials {
   username: string;
   password: string;
   passwordConfirmation: string;
}

@Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
   // ------------- FORM-CONTROLS
   username = new FormControl('', {
      validators: [
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(20),
         Validators.pattern(/^[a-z0-9]+$/),
      ],
      // asyncValidators: this.uniqueUsername.validate as AsyncValidatorFn,
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
      //                       👇
      { validators: [Validators.required /* , this.matchPassword.validate*/] }
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
      console.log(this.authForm.value);
   }
}
