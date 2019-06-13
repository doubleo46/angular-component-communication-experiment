import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MappingDataComponent } from './mapping-data/mapping-data.component';

const routes: Routes = [
  {path:'',redirectTo:'/communications',pathMatch:'full' },
  {path:'communications',component:HomeComponent },
  {path:'without-subscription', component:MappingDataComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
