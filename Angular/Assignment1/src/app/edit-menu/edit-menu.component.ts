import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'; // to navigate from code.
import{ActivatedRoute} from '@angular/router'; //import this to read parameter.
import{ParamMap} from '@angular/router'; //this provides get method.
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  resName:any;
  itemName:any; 
  price:any;
  name:any; 
  menu:any;
  constructor(private _service:RestaurantService ,private route :ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.resName = this.route.snapshot.paramMap.get('resName');
    this.itemName = this.route.snapshot.paramMap.get('itemName');
    this.menu = this._service.getMenu(this.resName);
    for(let item of this.menu){
      if(item.name == this.itemName){
        this.price = item.price;
        this.name = item.name;

      }
    }

  }

  update(newItemName:any,newItemPrice:any){
    this._service.editMenu(this.resName,this.itemName,newItemName,newItemPrice);    
  }
  back():void{
    this.router.navigate(['/restaurant/menu',this.resName]);
  }
}
