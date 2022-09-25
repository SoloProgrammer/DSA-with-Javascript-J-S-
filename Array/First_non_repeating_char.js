let str = "abc kdab       dcskuugis";
let str_arr = str.replace(/ /g,"").split('');

let first_non_repeating_char = null

str_arr.forEach(ch =>{
    if(!str_arr.slice(str_arr.indexOf(ch) + 1).includes(ch) && first_non_repeating_char == null){
        first_non_repeating_char = ch;
    }
});
first_non_repeating_char;