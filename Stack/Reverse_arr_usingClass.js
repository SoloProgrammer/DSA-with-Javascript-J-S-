// PROBLEM : how do you reverse an array using stack data structure ?

// class Stack{

//     constructor(size){
//         this.data = [];
//         this.max_len = size;
//         this.currentSize = this.data.length;
//     }
        
//     push(new_val){
//         if(this.data.length < this.max_len){
//             this.data[this.data.length] = new_val;
//         }
//         else{
//             window.alert("Stack is full")
//         }
//     }
//     pop(arr){
//         let LastRemovedItem = arr[arr.length - (this.currentSize + 1)];
//         this.currentSize < arr.length && this.currentSize++;
//         return LastRemovedItem;
//     }
// }

// let stack = new Stack(6);

// let arr = [1,2,3,4,5,6]; // arr length should be equal to stack len gh 

// arr.forEach(item => {
//     stack.push(stack.pop(arr))
// })
// stack.data;


// another method................................................................................

class Stack{

    constructor(size){
        this.data = [];
        this.max_len = size;
        this.currentSize = this.data.length;
    }
        
    push(new_val){
        if(this.data.length < this.max_len){
            this.data[this.data.length] = new_val;
        }
        else{
            window.alert("Stack is full")
        }
    }
    pop(copy_arr){
        let LastRemovedItem = copy_arr[copy_arr.length - 1];
        copy_arr.length > 0 && copy_arr.length--;
        return LastRemovedItem;
    }

}

let stack = new Stack(6);

let arr = [1,2,3,4,5,6];
let copy_arr = [...arr]

arr.forEach(item => {
    stack.push(stack.pop(copy_arr))
})
stack.data;