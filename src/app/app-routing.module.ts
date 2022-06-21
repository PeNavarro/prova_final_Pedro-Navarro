import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCarsComponent } from './register-cars/register-cars.component'
import { ListCarsComponent } from './list-cars/list-cars.component'

const routes: Routes = [
  {path: 'register', component: RegisterCarsComponent},
  {path: 'list', component: ListCarsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
