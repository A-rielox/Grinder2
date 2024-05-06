import { Component } from '@angular/core';

@Component({
   selector: 'app-collections-home',
   templateUrl: './collections-home.component.html',
   styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
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
}
