import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../math-validators';

@Component({
   selector: 'app-equation',
   templateUrl: './equation.component.html',
   styleUrls: ['./equation.component.css'],
})
export class EquationComponent {
   secondsPerSolution = 0;

   mathForm = new FormGroup(
      {
         a: new FormControl(this.randomNumber(), {
            validators: [],
            nonNullable: true,
         }),
         b: new FormControl(this.randomNumber(), {
            validators: [],
            nonNullable: true,
         }),
         answer: new FormControl('', { validators: [], nonNullable: true }),
      },
      // validacion de la FORM
      [MathValidators.addition('answer', 'a', 'b')]
   );

   // scan es como 'reduce', scan((acc,curr) => acc + curr, 0 )
   // 1  3  5 --->
   // 1  4  9 --->

   // " this.mathForm.statusChanges " emite un evento (es un EventEmitter)  cada q se ingresa un valor al input, lo q emite es VALID o INVALID segun es status de la form
   //
   // con .valueChanges.subscribe() haria una operacion cada vez q cambia el valor del input
   //

   randomNumber() {
      return Math.floor(Math.random() * 10);
   }
}
