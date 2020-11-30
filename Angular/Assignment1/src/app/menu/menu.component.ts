import { Component, OnInit, OnChanges } from '@angular/core';
import{Router} from '@angular/router'; // to navigate from code.
import{ActivatedRoute} from '@angular/router'; //import this to read parameter.
import{ParamMap} from '@angular/router'; //this provides get method.
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  isAdmin:boolean = false;
  menu:Array<any> = [];
  resName:any = '';
  constructor(private _service:RestaurantService ,private route :ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.resName=this.route.snapshot.paramMap.get('name');

    this.menu = this._service.getMenu(this.resName);
    this.isAdmin = this._service.isAdmin;
  }
  deleteMenu(item:any){
    this.menu  = this._service.deleteMenu(this.resName,item);
    console.log("item deleted");
  }

  addMenu(newItem:any, newPrice:any){
    this.menu  = this._service.addMenu(this.resName,newItem,newPrice); 
  }

  editMenu(itemName:any){
    this.router.navigate(['restaurant/menu/edit',this.resName,itemName]);
  }

  order(item:any){
    alert("Order of "+item.name+" placed successfully!!! ")  }


}
