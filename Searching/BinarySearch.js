// Iterative approach.........................................................

let nums  = [1,2,3,4,5,6,7], target = 1;

let start = 0, end = nums.length - 1, pos;

while(start <= nums.length - 1){
    let mid = Math.floor((start + end)/2)
    console.log(mid)
    if(nums[mid] === target){
        pos = mid;
        break;
    }
    else if(nums[mid] > target){
        end = mid - 1
    }
    else{
        start = mid + 1    
    }
}

console.log(pos)

// Rescursive approach.........................................................

function search(nums, target, start, end){
    let mid = Math.floor((start+end)/2);
    if(nums[mid] !== target){
        console.log(mid)
        if(nums[mid] > target){
            mid = search(nums,target,start,mid - 1)
        }
        else mid= search(nums,target,mid + 1,end)
    }
    else return mid

    return mid
}

console.log(search(nums, target, 0, nums.length - 1))