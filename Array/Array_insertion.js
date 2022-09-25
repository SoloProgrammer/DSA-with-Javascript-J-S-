arr = [1,2,3,4,5,6,7];
let new_elm = 19
let pos_to_insert = 0;

for(let i = arr.length - 1 ; i >= pos_to_insert ; i--){
    arr[i + 1] = arr[i]
    if(i == pos_to_insert) arr[i] = new_elm
}

console.log(arr);