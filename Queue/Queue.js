let queue = [];
let max = 4;

function enqueue(val){
    if(queue.length == 0){
        queue[queue.length] = val;
    }
    else{
    if(queue.length < max ) {
        for (let i = queue.length; i >= 0; i--) {
            queue[i] = queue[i - 1];
            if(i == 0) queue[i] = val;
        }
    }
    else {
          console.log("Queue is full")
     }
    }
}

function dequeue(){
    queue.length--;
}

enqueue(5);
enqueue(10);
enqueue(11);
enqueue(12);
enqueue(13);


console.log(queue);

dequeue();

console.log(queue);