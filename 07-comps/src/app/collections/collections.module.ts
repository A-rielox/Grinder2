import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
   declarations: [CollectionsHomeComponent, TableComponent, BiographyComponent, CompaniesComponent, PartnersComponent, TabsComponent],
   imports: [CommonModule, CollectionsRoutingModule, SharedModule],
   exports: [
      /*CollectionsHomeComponent*/
   ], // se borra p'q sea routed module en lugar de domain module ( p'q no sean de los que estan disponibles todo el tiempo, solo cuando se ingrese a la ruta )
})
export class CollectionsModule {}
