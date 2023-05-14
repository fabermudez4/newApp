import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisrecordatoriosPageRoutingModule } from './misrecordatorios-routing.module';

import { MisrecordatoriosPage } from './misrecordatorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisrecordatoriosPageRoutingModule
  ],
  declarations: [MisrecordatoriosPage]
})
export class MisrecordatoriosPageModule {}
