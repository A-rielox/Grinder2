import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
   selector: '[appClass1]',
})
export class Class1Directive {
   constructor(private element: ElementRef) {}

   @Input('appClass1') set backgroundColor(color: string) {
      this.element.nativeElement.style.backgroundColor = color;
   }
   // o
   // @Input() set appClass1(color: string) {
   //    this.element.nativeElement.style.backgroundColor = color;
   // }
}

//
// this.element.nativeElement ---> elemento en q pongo la directiva
