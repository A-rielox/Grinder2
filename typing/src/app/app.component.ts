import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   randomText = 'Holi hola pirinola';
   enteredText = '';

   onInput(value: string) {
      this.enteredText = value;
   }

   compare(letter: string, enteredLetter: string) {
      if (!enteredLetter) return 'has-text-dark';

      return letter !== enteredLetter ? 'has-text-danger' : 'has-text-success';
   }
}
