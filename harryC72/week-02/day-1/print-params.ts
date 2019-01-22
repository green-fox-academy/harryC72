
function printParams(x?:any, ...y: any[]){
  if(!x)
  {
    return 'Empty';
  }
  else{
    return x + ' ' +  y.join(' ');
  }
}

console.log(printParams());

console.log(printParams('Sam'));

console.log(printParams('George', 13, 12, 11, 'Ben'));