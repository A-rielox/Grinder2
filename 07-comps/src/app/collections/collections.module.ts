import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
   declarations: [CollectionsHomeComponent, TableComponent],
   imports: [CommonModule, CollectionsRoutingModule, SharedModule],
   exports: [
      /*CollectionsHomeComponent*/
   ], // se borra p'q sea routed module en lugar de domain module ( p'q no sean de los que estan disponibles todo el tiempo, solo cuando se ingrese a la ruta )
})
export class CollectionsModule {}
