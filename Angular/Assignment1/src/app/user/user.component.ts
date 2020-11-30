import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import{Router} from '@angular/router'; // to navigate from code.

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  restaurants:Array<any> = [];
  constructor(private _service:RestaurantService, private router:Router ) { }

  ngOnInit(): void {
    this.restaurants = this._service.getRestaurants();
  }
  showMenu(res:any){
    this.router.navigate(['restaurant/menu',res.name]);
  }

}
