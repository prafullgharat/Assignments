import { Component } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _Service: RestaurantService,  private router:Router) { }

  admin(){
    this._Service.admin();
    this.router.navigate(['/restaurants']);

  }
  user(){
    this._Service.user();
  }
}
