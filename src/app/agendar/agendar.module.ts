import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';


import { AgendarRoutingModule } from './agendar-routing.module';
import { AgendarComponent } from './agendar/agendar.component';


@NgModule({
  declarations: [
    AgendarComponent
  ],
  imports: [
    CommonModule,
    AgendarRoutingModule,
    MatTableModule
  ]
})
export class AgendarModule { }
