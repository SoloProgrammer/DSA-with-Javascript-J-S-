// first method : By manipukating the original array and using the reecursion to implement this

let arr = [1,2,3,4,5,6];
function reverse(arr,mid,ind){
    if(ind < mid - 1){
        return arr;
    }
    else{
        temp = arr[ind];
        arr[ind] = arr[arr.length - (mid + 1)]
        arr[arr.length - (mid + 1)] = temp;

        ind++;
        
    }
}
let mid = Math.floor(arr.length / 2);
reverse(arr,mid,0);

// second method : by default method avilable in javscript

arr.reverse();

// third method : using another array and store reverse of original array in it

let reverse_arr = [];
arr.forEach((item,i)=>{
    reverse.push(arr[arr.length - (i + 1)])
})

// using reduce method :

reverse_arr = arr.reduce((accum,curr,i) =>{
    accum.push(arr[arr.length - (i + 1)]);
    return accum;
},[])

// Reverse array with Stack implementation 


let string = "pratham";

let data = [];

function push(new_val){
    data[data.length] = new_val;
}
function pop(arr){
    let itemRemoved = arr[arr.length - 1];
    arr.length > 0 && arr.length--;
    return itemRemoved;
}

let str_arr = string.split('');
let copy_str_arr = [...str_arr]

str_arr.forEach(char => push(pop(copy_str_arr)))

data.join('');

