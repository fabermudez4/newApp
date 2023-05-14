import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisrecordatoriosPage } from './misrecordatorios.page';

const routes: Routes = [
  {
    path: '',
    component: MisrecordatoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisrecordatoriosPageRoutingModule {}
