// PROBLEM : How do you check if a string contains only digits

let str = "pratham shinde";
let digi_str = '12345sdg'
let digi = '11212312312'

str.length == String(parseInt(str)).length ? console.log(true) : console.log(false) // output : false 

digi_str.length == String(parseInt(digi_str)).length ? console.log(true) : console.log(false) // output : false 

digi.length == String(parseInt(digi)).length ? console.log(true) : console.log(false) // output : true