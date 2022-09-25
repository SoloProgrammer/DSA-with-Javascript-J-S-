class Queue{
    constructor(size){
        this.max = size;
        this.items = [];
        this.front = -1;
        this.rear = -1;
        this.currentSize = this.items.length;
    }
    enqueue(val){
       if(this.currentSize < this.max){
           if(this.rear === this.max - 1) this.rear = 0;
           else this.rear++;
           this.items[this.rear] = val;
           this.currentSize++;
           if(this.front == - 1) this.front++;
       }
       else console.log("Queue is full")
    }
    dequeue(){
        if(this.currentSize != 0){
            this.items[this.front] = null;
            if(this.front == this.max - 1) this.front = 0
            else this.front++;
            this.currentSize--;
        }
        else{
            console.log("Queue is already empty");
            this.front = -1;
            this.rear = -1;
        }
    }
}

let queue = new Queue(5);

queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(8);

queue.dequeue();
queue.dequeue();
queue.enqueue(3);
queue.dequeue();
queue.dequeue();

queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(8);

console.log(queue.items)
console.log(queue)