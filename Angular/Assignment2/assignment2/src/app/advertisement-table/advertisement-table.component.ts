import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import{Router} from '@angular/router'; // to navigate from code.
import{ActivatedRoute} from '@angular/router'; //import this to read parameter.
import{ParamMap} from '@angular/router'; //this provides get method.
import {AdvertisementService} from '../advertisement.service';

@Component({
  selector: 'app-advertisement-table',
  templateUrl: './advertisement-table.component.html',
  styleUrls: ['./advertisement-table.component.css']
})
export class AdvertisementTableComponent implements OnInit {

  constructor(private advertisementService: AdvertisementService, private route :ActivatedRoute, private router:Router) { }

  // @Input() advertisementList;

  // @Output() deleteEvent = new EventEmitter();

  advertisementList = [];

  ngOnInit(): void {
    this.advertisementList = this.advertisementService.getAllAdvertises();
    
  }

  //to delete advertisement
  deleteAd(advertisement){

    // //to delete from app.component
    // this.deleteEvent.emit(advertisement);

    // //to delete data in service
    this.advertisementList=this.advertisementService.deleteAdvertisement(advertisement);

  }

  //to edit advertisement
  editAd(advertisement){
      this.router.navigate(['/edit',advertisement.title]);
  }

  val = "";

 


}
