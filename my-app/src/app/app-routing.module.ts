import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./modules/forms/forms.module').then(
        (m) => m.FormsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
