// PROBLEM :  How do you check if two strings are anagrams of each other? (

function checkanagram(str1,str2){
    let char = {};
    for(ch of str1){
        char[ch] = (char[ch] || 0) + 1;
    }
    for(ch of str2){
        if(!char[ch]) return false
        char[ch]--;
    }
    return true;
}
let result = checkanagram("hello","llloh");
if(result) console.log("Strings are anagram");
else console.log("Strings are not anagram");