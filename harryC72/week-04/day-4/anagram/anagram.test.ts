import { isAnagram } from './anagram'
import { test } from 'tape'


test('test if isAnagram returns true when anagram', t =>{

let actual:boolean = isAnagram('ear', 'are');
let expected: boolean= true;

t.equal(actual, expected);
t.end();

})

test('Test if isAnagram returns false when not anagram', t =>{

let actual: boolean  = isAnagram('pistol', 'gun');
let expected: boolean = false;

t.equal(actual, expected);
t.end();
})

// test('Test if isAnagram returns error', t =>{

//  let actual = t.throws(function() { isAnagram(null, null); });
//   t.equal(Error, actual);

// t.end();

// })



  
