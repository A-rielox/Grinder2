import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
   declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective, SegmentComponent],
   imports: [CommonModule, ElementsRoutingModule, SharedModule],
   exports: [
      /*ElementsHomeComponent*/
   ], // se borra p'q sea routed module en lugar de domain module ( p'q no sean de los que estan disponibles todo el tiempo, solo cuando se ingrese a la ruta )
})
export class ElementsModule {}
