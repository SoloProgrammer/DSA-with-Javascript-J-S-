// PROBLEM : How do you find all pairs of an integer array whose sum is equal to a given
// number?

let arr = [2,3,-1,4,5,6,12,34,0,7,8]
let sum = 10;
let pairs = [];
arr.forEach(item => {
    if(arr.slice(arr.indexOf(item) + 1).includes(sum - item)){  
        pairs.push([item,(sum - item)])
    }
});
pairs;


// with recursion

function sum_pairs(arr,pairs,i){
    if(arr.length > 0){
        if(arr.slice(arr.indexOf(arr[0]) + 1).includes(sum - arr[0])){
            pairs.push([arr[0],sum - arr[0]]);
        }
        sum_pairs(arr.slice(arr.indexOf(arr[0]) + 1),pairs,i + 1);
    }
}
sum_pairs(arr,pairs,1);

pairs;