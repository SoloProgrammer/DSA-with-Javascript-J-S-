let arr1 = [1,2,3,4,5]
let arr2 = [19,25]

// combininf=g arr2 with arr1

for(let i=0;i < arr1.length ; i++){
    arr2[arr2.length] = arr1[i]
}
console.log(arr2);

// conbining arr1 and arr2 with arr3

let arr3 = []

for(let i=0;i < arr1.length ; i++){

    arr3.push(arr1[i])
}
for(let i=0;i < arr2.length ; i++){

    arr3.push(arr2[i])
}
console.log(arr3);


//  third and simple method

console.log([...arr1,...arr2])

// using while loop and merging first array in secong array

let i = 0;
while(i < arr1.length){
    arr2[arr2.length] = arr1[i]
    i++;
}

console.log(arr2);