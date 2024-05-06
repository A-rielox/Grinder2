import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
   selector: '[appTimes]',
})
export class TimesDirective {
   // cuando trate de poner la appTimes prop llamo a al fcn "render"
   @Input('appTimes') set render(times: number) {
      this.vcRef.clear();

      for (let i = 0; i < times; i++) {
         this.vcRef.createEmbeddedView(this.templateRef, {
            // valores a dovolver, p'q sean accesibles en el .html
            index: i,
         });
      }
   }

   constructor(
      private templateRef: TemplateRef<any>,
      private vcRef: ViewContainerRef
   ) {}
}

// ViewContainerRef es la referencia al elemento al q le aplico este microship
// TemplateRef es la referencia a los elementos q estan dentro del vcRef
