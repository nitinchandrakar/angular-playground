import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModules } from './components-routing.module';
import { ComplexComponentsComponent } from './pages/complex-components/complex-components.component';
import { CommentModule } from 'src/app/components/comment/comment.module';

@NgModule({
  declarations: [
    ComplexComponentsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModules,
    CommentModule
  ]
})
export class ComponentsModule { }
