import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-accordion',
   templateUrl: './accordion.component.html',
   styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
   @Input() items: { title: string; content: string }[] = [];
   openItemIndex = 0;
}
