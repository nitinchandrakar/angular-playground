import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { FormsRoutingModule } from './forms-routing.module';



@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
