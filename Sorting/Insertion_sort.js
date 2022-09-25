let arr = [8,3,4,1,7,9,0]

// selection sort

for(let i = 1 ; i < arr.length ; i++){
    let curr = arr[i];
    let pos = i;
    while(curr < arr[pos - 1] && pos > 0){
        temp = arr[pos];
        arr[pos] = arr[pos - 1]
        arr[pos - 1] = temp;
        pos--;
    }
}

arr;