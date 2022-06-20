import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Component/homepage/homepage.component';

const routes: Routes = 
[
  {
    path:"",
    pathMatch: 'full',
    redirectTo:'Home'
  },
  {
    path:'Home',
    component: HomePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
