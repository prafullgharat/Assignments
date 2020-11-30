import { Component, OnInit, Input } from '@angular/core';

import{Router} from '@angular/router'; // to navigate from code.
import{ActivatedRoute} from '@angular/router'; //import this to read parameter.
import{ParamMap} from '@angular/router'; //this provides get method.
import {AdvertisementService} from '../advertisement.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  title:string;
  advertisement:any;

  categories = ["Furniture", "Hardware", "Mobile"];

  constructor(private _advertisementService: AdvertisementService, private route :ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.title=this.route.snapshot.paramMap.get('title');
    this.advertisement = this._advertisementService.getAdvertise(this.title);

  }

  update(ad:any){
    console.log("ad "+ad);
    this._advertisementService.updateAdvertise(ad,this.title);    
  }
  back():void{
    this.router.navigate(['/table']);
  }

}
