import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants:Array<any> = [];
  isAdmin:boolean = false;
  
  constructor(private _service:RestaurantService , private router:Router) { }

  ngOnInit(): void {
    this.restaurants = this._service.getRestaurants();
    this.isAdmin = this._service.isAdmin;
  }

  deleteRes(res:any){
    this.restaurants = this._service.deleteRestaurant(res);
    console.log("data deleted");
  }
  addRes(resName:any){
    this._service.addRestaurant(resName);
  }
  editRes(res:any){
    this.router.navigate(['restaurant/edit',res.name]);
  }

  showMenu(res:any){
    this.router.navigate(['restaurant/menu',res.name]);
  }
}
