import { AgendarModule } from './agendar/agendar.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: ' ', pathMatch: 'full', redirectTo:'Agendar' },
  {path: 'Agendar',
  loadChildren: () => import('./agendar/agendar.module').then(m => m.AgendarModule)}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
