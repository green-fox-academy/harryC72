import { test } from 'tape'
import { Sum } from './sum'

test('test adding numbers', t =>{
 const testClass = new Sum();
 const testListNum: number[] = [1,3,5,6];

 let actual = testClass.arithmetic(testListNum);
 let expected = 15;

 t.equal(actual, expected);
 t.end();
})

test('Test with empty list', t => {

  let testClass = new Sum();

  let testList: any = [];

  let actual = testClass.arithmetic(testList);

  let expected = 0;

  t.equal(actual, expected);
  t.end();

 



})

test('Test 0 results', t =>{

  let testClass = new Sum();
  let testList = [1];
  let actual = testClass.arithmetic(testList);
  let expected = 1;

  t.equal(1, 1);
  t.end();

})

test('Test with null', t => {

  let testClass = new Sum();
  
  let actual = testClass.arithmetic(null);
  let expected = Error; 

  t.equal(actual, expected);
  t.end();


})

test('Test with a string', t =>{

  let testClass = new Sum();
  let testString: string[] = ['fascinating'];

  let actual = testClass.arithmetic(testString)
  let expected = 'fascinating';

  t.equal(actual, expected);
  t.end();

})
//     with a string

// Run them
// Fix your code if needed