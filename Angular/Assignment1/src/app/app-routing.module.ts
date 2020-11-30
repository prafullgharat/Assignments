import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';

EditRestaurantComponent
const routes: Routes = [
  {path:'',redirectTo: '/user', pathMatch:'full'},
  {path: 'user', component:UserComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'restaurants', component:RestaurantComponent},
  {path:'restaurant/menu/:name',component:MenuComponent},
  {path:'restaurant/edit/:name',component:EditRestaurantComponent},
  {path:'restaurant/menu/edit/:resName/:itemName',component:EditMenuComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  RestaurantComponent,
  MenuComponent
 ]