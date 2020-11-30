import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdvertisementTableComponent } from './advertisement-table/advertisement-table.component';

const routes: Routes = [
  {path:'',redirectTo: '/table', pathMatch:'full'},
  {path: 'table',component:AdvertisementTableComponent,},
  {path: 'edit/:title',component:EditProductComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
