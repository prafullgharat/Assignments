import { Component } from '@angular/core';
import { AdvertisementService } from './advertisement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  advertisementList = [];

  constructor(private advService:AdvertisementService){}

  addAdvertisement(advertisementModel){
    this.advertisementList.push(advertisementModel);
    console.log(this.advertisementList);
  }

  deleteAdvertisement(advertisement){
    this.advertisementList = this.advertisementList.filter(ad => ad!=advertisement);
  }



}
