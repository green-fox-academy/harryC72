
export class Sum{

  arithmetic(listNumber:any[]): number{

    let result:any = 0;

    listNumber.forEach(element => {
      result += element;
    });
    
    return result;
  
  }

} 

