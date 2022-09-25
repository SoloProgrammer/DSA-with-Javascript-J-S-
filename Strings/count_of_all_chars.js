// PROBLEM :  How do you count the occurrence of a all characters of a string? 


let str = "aabbcdddeffggggg";
let char_count = {};
for(ch of str){
    char_count[ch] = (char_count[ch] || 0) + 1
}
char_count;


// output : {a: 2, b: 2, c: 1, d: 3, e: 1, f: 2, g: 5}