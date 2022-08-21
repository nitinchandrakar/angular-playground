import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexComponentsComponent } from './pages/complex-components/complex-components.component';

const routes: Routes = [
  {
    path: '',
    component: ComplexComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModules { }
