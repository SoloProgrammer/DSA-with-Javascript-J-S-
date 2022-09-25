//PROBLEM : How do you check if a given string is a palindrome? 

let str1 = "abcd";
let str2 = "dcbsa";
let str_arr = str2.split('')

let reverse_str2 = str_arr.reduce((accum,curr,i)=>{
    accum.push(str_arr[str_arr.length - (i + 1)]);
    return accum;
},[]).join('')

if(reverse_str2 == str1) console.log("both strongs are palindrome")
else console.log("both strongs are not palindrome")