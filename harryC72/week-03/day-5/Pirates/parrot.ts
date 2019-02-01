import { Rand } from "./random";

export class Parrot{
  name: string;
  health: number;
  aggressiveness: number;
  insults: string[];

  insult(){
    console.log(insults[Rand.getRandomNumber(0, insults.length-1)];
  }



}

let insults: string[] = [
  'Go slam yer head on a marlin spike',
  'ye lard brained screechy gobshyte!',
  "ye syphilitic puppy killin/' slimey bastitch!",
  "ye rabid, nose pickin/' worthless streak O/' pee !"

]