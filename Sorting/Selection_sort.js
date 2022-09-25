let arr = [2,3,-1,4,5,6,12,34,0,7,8];

for(let i = 0 ; i < arr.length; i++){
   let new_arr = arr.slice(i);
    let min = new_arr[0];
    for(let j = 0; j < new_arr.length ; j++){
        if(new_arr[j] < min) min = new_arr[j]
    }
    let min_ind = arr.indexOf(min);

    temp = arr[i];
    arr[i] = min;
    arr[min_ind] = temp;
    
}
arr;