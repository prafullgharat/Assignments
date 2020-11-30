import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';

import { routingComponents } from './app-routing.module';
import { RestaurantService } from './restaurant.service';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MenuComponent,
    UserComponent,
    routingComponents,
    EditMenuComponent,
    EditRestaurantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
