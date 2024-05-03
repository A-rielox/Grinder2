import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { Class1Directive } from './class1.directive';
import { TimesDirective } from './times.directive';

@NgModule({
   declarations: [AppComponent, ClassDirective, Class1Directive, TimesDirective],
   imports: [BrowserModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
