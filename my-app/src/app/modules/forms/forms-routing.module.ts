import { NgModule } from '@angular/core';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: ReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
