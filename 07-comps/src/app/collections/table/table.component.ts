import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-table',
   templateUrl: './table.component.html',
   styleUrls: ['./table.component.css'],
})
export class TableComponent {
   @Input() data: any = [];
   @Input() headers: any = [];
   @Input() classNames = '';
}

/*
   data = [
      { name: 'James', age: 24, job: 'Designer', employed: 'si' },
      { name: 'Jill', age: 26, job: 'Engineer', employed: 'no' },
      { age: 25, name: 'Elyse', job: 'Engineer', employed: 'si' },
   ];

   headers = [
      { key: 'employed', label: 'Esta contratado' },
      { key: 'name', label: 'Name' },
      { label: 'Age', key: 'age' },
      { key: 'job', label: 'Job' },
   ];
*/
