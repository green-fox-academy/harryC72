
export class Plant{
  color: string;
 water: number;
 needsWatering: number;


 constructor(plantColor: string, w: number, need: number){
  this.water = w;
  this.needsWatering = need;
 }

 watered(waterAmount: number){
    if(this.statusWatering() == true){this.water += waterAmount};        
  }

 statusWatering(){
   if(this.water <= this.needsWatering){ 
     return true;
   }
   
 }


}

