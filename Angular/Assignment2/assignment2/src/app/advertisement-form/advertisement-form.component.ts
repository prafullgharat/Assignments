import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Advertisement} from '../advertisement';
import {AdvertisementService} from '../advertisement.service';

@Component({
  selector: 'app-advertisement-form',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css']
})
export class AdvertisementFormComponent implements OnInit {

  //predefined name value
  name:string = "Prafull";
  //categories array
  categories = ["Furniture", "Hardware", "Mobile"];

  advertisementList = [];
  advertisementModel = new Advertisement("",this.name,'','');

  @Output() greetEvent = new EventEmitter();

  
  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit(): void {
  }

  //validation
  categoryHasError = true;
  submitted = false;
  validateCategory(value:any){
    if(value === 'default'){
      this.categoryHasError = true;
    }
    else{
      this.categoryHasError = false;
    }
  }


  onSubmit(advertisementFormValue){
    // // to send data to app.component
    // this.advertisementList.push(advertisementFormValue);
    // this.greetEvent.emit(advertisementFormValue);

    
    // to send data to service
    this.advertisementService.addAdvertisement(advertisementFormValue);
  }

}
