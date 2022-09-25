let arr = [1,2,3,4,5,6,7];

// move arr elment to given position

let elm_to_move = 5;
let pos_to_move = 2;
let ind = arr.indexOf(elm_to_move)

if(ind < pos_to_move){
    for(let i = ind ; i <= pos_to_move ; i++){
        arr[i] = (i == pos_to_move) ? elm_to_move : arr[i + 1];
    }
}
else{
    for(i = ind ; i >= pos_to_move ; i--){
        arr[i] = (i == pos_to_move) ? elm_to_move : arr[i - 1];
    }
}

console.log(arr);