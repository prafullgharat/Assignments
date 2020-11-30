import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'; // to navigate from code.
import{ActivatedRoute} from '@angular/router'; //import this to read parameter.
import{ParamMap} from '@angular/router'; //this provides get method.
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  name:any; 
  constructor(private _service:RestaurantService ,private route :ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');

  }

  update(newName:any){
    this._service.editRestaurant(this.name,newName);    
  }
  back():void{
    this.router.navigate(['/restaurants']);
  }

}
