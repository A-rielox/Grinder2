import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   password = '';
   letters = false;
   numbers = false;
   symbols = false;
   length = 0;

   onButtonClick() {
      const numbers2 = '1234567890';
      const letters2 = 'qwertyuiopasdfghjklzxcvbnm';
      const symbols2 = '!@#$%^&*()';

      let validChars = '';
      if (this.letters) validChars += letters2;

      if (this.numbers) validChars += numbers2;

      if (this.symbols) validChars += symbols2;

      let generatedPassword = '';
      for (let i = 0; i < this.length; i++) {
         const index = Math.floor(Math.random() * validChars.length);

         generatedPassword += validChars[index];
      }

      this.password = generatedPassword;
   }

   useLetters() {
      this.letters = !this.letters;
   }
   useNumbers() {
      this.numbers = !this.numbers;
   }
   useSymbols() {
      this.symbols = !this.symbols;
   }

   onChangeLength(value: string) {
      const parsedVal = parseInt(value);

      if (!isNaN(parsedVal)) {
         this.length = parsedVal;
      }
   }
}
