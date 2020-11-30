import { Injectable } from '@angular/core';
import{Router} from '@angular/router'; // to navigate from code.

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor( private router:Router) { }

  advertisementList = [];

  addAdvertisement(advertisement:any){
    this.advertisementList.push(advertisement);
    console.log(this.advertisementList);
  }

  deleteAdvertisement(advertisement:any){
    this.advertisementList = this.advertisementList.filter(ad => ad!=advertisement);
    return this.advertisementList;

  }

  getAllAdvertises(){
    return this.advertisementList;
  }

  getAdvertise(title:string){
    this.advertisementList = this.advertisementList.filter(ad=>ad.title === title);
    return this.advertisementList;
  }


  updateAdvertise(advertisement:any, oldTitle:any){

    for(let i=0; i<this.advertisementList.length;i++){
      if(this.advertisementList[i].title==oldTitle){
        this.advertisementList[i] = advertisement;
        break;
      }
    }  
    this.router.navigate(['/table']);

  }

}
