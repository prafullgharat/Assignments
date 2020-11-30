import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  isAdmin:boolean = false;

  admin(){
      this.isAdmin = true;
  }
  user(){
    this.isAdmin = false;
  }

  restaurants = [
    {
      name : "KFC",
      menu:[{name:"Burger",price:100},{name:"pizza",price:200}]
    },
    {
      name : "Domino's",
      menu:[{name:"Pizza",price:300},{name:"Tacos",price:100}]

    },
    {
      name : "McDonald's",
      menu:[{name:"Burger",price:100},{name:"Fries",price:70},{name:"Coke",price:50}]
    }
  ];

  getRestaurants(){
    return this.restaurants;
  }

  deleteRestaurant(res:any){
    this.restaurants =  this.restaurants.filter(restaurant => restaurant != res);
    return this.restaurants ;
  }

  addRestaurant(resName:any){
    this.restaurants.push({"name":resName, "menu":[]});
    return this.restaurants ;
  }

  editRestaurant(oldName:string, newName:string){
    for(let i=0; i<this.restaurants.length;i++){
      if(this.restaurants[i].name===oldName){
        this.restaurants[i].name = newName;
        break;
      }
    }  
    alert("Name updated");
    
  }


  getMenu(resName:any){
    for(let i=0; i<this.restaurants.length;i++){
      if(this.restaurants[i].name==resName){
        return this.restaurants[i].menu;
      }
    }
    return [];
  }

  deleteMenu(resName:any,item:any){
    for(let restaurant of this.restaurants){
      if(restaurant.name==resName){
        restaurant.menu = restaurant.menu.filter(it => it != item);
        console.log(restaurant.menu);
        return restaurant.menu ;
      }
    }
    return [] ;
  }

  addMenu(resName:any,newitem:any, newPrice:any){
    for(let restaurant of this.restaurants){
      if(restaurant.name==resName){
        restaurant.menu.push({"name":newitem,"price":newPrice});
        console.log(restaurant.menu);
        return restaurant.menu ;
      }
    }
    return [] ;
  }

  editMenu(resName:string, oldName:string, newName:string, newPrice:any){

    for(let restaurant of this.restaurants){
      if(restaurant.name == resName){
        for(let item of restaurant.menu){
          if(item.name == oldName){
            item.name = newName;
            item.price = newPrice;
            break;
          }
        }
        
      }
    }
    alert("Menu updated");
    
  }

  

}
