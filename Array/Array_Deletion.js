arr = [1,2,3,4,5,6,7];

let elm_to_rm = 3;
let ind = arr.indexOf(elm_to_rm);

for(let i = ind ; i < arr.length ; i++){
   arr[i] = arr[i + 1]
    if(i == arr.length - 1) arr.pop()
}

console.log(arr);