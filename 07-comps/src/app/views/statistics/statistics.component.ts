import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-statistics',
   templateUrl: './statistics.component.html',
   styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
   @Input() data: any = [];
}

/*
stats = [
      { value: 22, label: '# of Users' },
      { value: 300, label: 'Revenue' },
      { value: 50, label: 'Reviews' },
   ];
*/
