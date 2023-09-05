import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'controls',
        loadChildren: () => import('./pages/controls/controls.module').then(m => m.ControlsModule)
      },
      {
        path: 'shared',
        loadChildren: () => import('./pages/shared/shared.module').then(m => m.SharedModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
