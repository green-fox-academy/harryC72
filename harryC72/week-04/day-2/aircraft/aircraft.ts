'use strict'

// Aircrafts

//     Create a class that represents an aircraft
//     There are 2 types of aircrafts: F16 and F35
//     Both aircraft should track how many ammo it has

export class Aircraft{
         ammo: number;
         maxAmmo: number;
         baseDamage: number;
         damage: number;
         type: string

         constructor(planeAmmo: number, planeMaxAmmo: number,
           planeBaseDamage: number, planeDamage: number,  planeType:string){
           this.ammo = planeAmmo;
           this.maxAmmo = planeMaxAmmo;
           this.baseDamage = planeBaseDamage;
           this.damage = planeDamage;
           this.type = planeType;
         }

         // fight

//     It should use all the ammos (set it to 0) and it should return the damage it deals
//     The damage is the multiplication of the base damage and the ammos

         fight(): number{
              let damage: number = this.ammo * this.baseDamage;
              this.damage += damage;
              this.ammo = 0;
              return damage;
         }


// refill

        refill(amountRefillAmmo: number): number{

            let remainingAmmo: number = 0;
            let ability: number = 0;

            ability = this.maxAmmo - this.ammo;

            remainingAmmo = amountRefillAmmo - ability;
            if(remainingAmmo<0){
              this.ammo = this.ammo - remainingAmmo;
            }else{
              this.ammo = this.maxAmmo;
            }
              
            return remainingAmmo;
        }

        getType(): string{
          let result: string = this.type;
          return result;
        }

        getStatus(): string{
          let result: string = `Type: ${this.getType()}, Ammo: ${this.ammo},
           Base Damage: ${this.baseDamage}, All Damage: ${this.damage} `;
          return result;
        }

        isPriority(): boolean{
          let result = (this.getType() == 'F35') ? true : false; 

          return result;
        }
}

