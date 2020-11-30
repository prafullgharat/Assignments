import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertisementFormComponent } from './advertisement-form/advertisement-form.component';

import { FormsModule } from '@angular/forms';
import { AdvertisementTableComponent } from './advertisement-table/advertisement-table.component';
import { AdvertisementService } from './advertisement.service';
import { EditProductComponent } from './edit-product/edit-product.component';

import{Search} from './appPipes/search.pipe'; //this provides get method.


@NgModule({
  declarations: [
    AppComponent,
    AdvertisementFormComponent,
    AdvertisementTableComponent,
    EditProductComponent,
    Search

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AdvertisementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
