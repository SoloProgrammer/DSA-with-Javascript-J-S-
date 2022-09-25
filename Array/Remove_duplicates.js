// PROBLEM : How are duplicates removed from a given array 

let str = "zabcdafg     hijk       hmlopbbbbmnop";
let str_arr = str.replace(/ /g,"").split('');
str_arr
let duplicates = []
str_arr.forEach(ch =>{
    if(str_arr.slice(str_arr.indexOf(ch) + 1).includes(ch) && !duplicates.includes(ch)){
        duplicates.push(ch)
    }
});
console.log(str_arr)
duplicates;