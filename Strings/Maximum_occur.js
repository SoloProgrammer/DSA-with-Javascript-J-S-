// PROBLEM : How do you the maximum occurrence of a given character in a string?

let str = "aabcccccacdfge"
let char_count = {};
for(ch of str){
    char_count[ch] = (char_count[ch] || 0) + 1
}
let result = ['char', 0]

console.log(char_count);

Object.keys(char_count).forEach(key => {
    
    if(char_count[key] > result[1]) {
        result = [key,char_count[key]]
    }
});
console.log(result);

console.log(`[ ${result[0]} ] is Maximum occuring character in ${str} it repeats itself [ ${result[1]} ] times`);
