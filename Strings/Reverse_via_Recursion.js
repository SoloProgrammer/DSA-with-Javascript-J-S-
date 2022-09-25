// PROBLEM : How can a given string be reversed using recursion?

let str = "pratham";

function reverse_str(str_arr,result,i){
    console.log(i);
    while(i <= str_arr.length){
        result.push(str_arr[str_arr.length - i]);
        return reverse_str(str_arr,result,i + 1);
    }
    return result;
}
let str_arr = str.split('');
reverse_str(str_arr,[],1).join('');