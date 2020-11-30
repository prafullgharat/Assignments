import {PipeTransform, Pipe} from '@angular/core';
import { Advertisement } from '../advertisement';

@Pipe({
    name:'search'
})
export class Search implements PipeTransform{
    transform(advertisementList:any,searchTxt:string){
        
        // console.log(JSON.stringify(advertisementList)+" "+searchTxt);

        
        if(!searchTxt){
            return advertisementList;
        }
        let  advertisementList2 =  advertisementList.filter(advertisement => ( advertisement.name.includes(searchTxt) || advertisement.title.includes(searchTxt) ));
        console.log(JSON.stringify(advertisementList2));

        return advertisementList2;
        
        // return (advertisementList+ searchTxt);
    }
}