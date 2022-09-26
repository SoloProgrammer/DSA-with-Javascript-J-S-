// PROBLEM : How do you count a number of vowels and consonants in a given string ?

let str = 'pratham shinde'

let vowels_arr = ['a','e','i','o','u'];

let vowels_count = 0, consonants_count = 0; 

for(ch of str.replace(/ /g,"")){
    if(vowels_arr.includes(ch)) vowels_count++;
    else consonants_count++;
}

console.log(`Total vowels present in the string are ${vowels_count}`)

console.log(`Total consonants present in the string are ${consonants_count}`)