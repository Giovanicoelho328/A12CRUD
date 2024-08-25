import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: 'crud-2', pathMatch: 'full'},
  {path: 'crud-2', loadChildren: ()=>import('./crud-2/crud-2.module').then(m=>m.Crud2Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
