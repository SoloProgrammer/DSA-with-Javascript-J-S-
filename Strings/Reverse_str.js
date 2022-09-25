// PEROBLEM : how do ypu reverse string without recursion ?

let str = "pratham";
let str_arr = str.split('');

// solu 1.........

let str_reverse_arr = [];

str_arr.forEach((ch,i) => {
    str_reverse_arr.push(str_arr[str_arr.length - (i + 1)]);
})
str_reverse_arr.join('');

// solu 2.........

str_arr.reduce((accum,curr,i)=>{
    accum.push(str_arr[str_arr.length - (i + 1)]);
    return accum;
},[]).join('')

// solu 3.........

str_arr.reverse().join('');


