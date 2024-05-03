import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   currentPage = 0;

   images = [
      {
         title: 'At the Beach',
         url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
      },
      {
         title: 'At the Lake',
         url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      },
      {
         title: 'At the Road',
         url: 'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80',
      },
      {
         title: 'At the farm',
         url: 'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      },
      {
         title: 'At the Beach',
         url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
      },
      {
         title: 'At the Lake',
         url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      },
      {
         title: 'At the Road',
         url: 'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80',
      },
      {
         title: 'At the farm',
         url: 'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      },
      {
         title: 'At the Beach',
         url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
      },
      {
         title: 'At the Lake',
         url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      },
      {
         title: 'At the Road',
         url: 'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80',
      },
      {
         title: 'At the farm',
         url: 'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      },
      {
         title: 'At the Beach',
         url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
      },
      {
         title: 'At the Lake',
         url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      },
      {
         title: 'At the Road',
         url: 'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80',
      },
      {
         title: 'At the farm',
         url: 'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      },
      {
         title: 'At the Beach',
         url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
      },
      {
         title: 'At the Lake',
         url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      },
      {
         title: 'At the Road',
         url: 'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80',
      },
      {
         title: 'At the farm',
         url: 'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      },
      {
         title: 'At the Beach',
         url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
      },
      {
         title: 'At the Lake',
         url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      },
      {
         title: 'At the Road',
         url: 'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80',
      },
      {
         title: 'At the farm',
         url: 'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      },
   ];

   // solo va a mostrar 5 paginas antes y despues de la actual
   checkWindowIndex(index: number) {
      return Math.abs(this.currentPage - index) < 5;
   }

   getClass() {
      const classes = [];

      if ('algo') classes.push('active');

      if ('otra') classes.push('inactive');

      return classes;
   }

   //
   //
   // -------------------------------> MAS CHIDO con la class1.directive.ts
   // getClass(level: string){
   //   const classes = []
   //   //'star', 'oro', 'plata'

   //   if(level = 'star'){
   //     classes.push(#1cb330)
   //   } else if(level = 'gold'){
   //     classes.push(#aca475)
   //   }
   // }

   // en el html <div [ngClass]="getClass(level)"
}
