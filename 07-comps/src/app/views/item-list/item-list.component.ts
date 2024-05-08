import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-item-list',
   templateUrl: './item-list.component.html',
   styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
   @Input() items: any = [];
}

/*
items = [
      {
         image: '/assets/images/couch.jpeg',
         title: 'Couch',
         description: 'This is a fantastic couch to sit on.',
      },
      {
         image: '/assets/images/dresser.jpeg',
         title: 'Dresser',
         description: 'This is a great dresseer to put stuff in.',
      },
   ];
*/
