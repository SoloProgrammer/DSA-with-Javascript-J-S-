class List{
    constructor(data){
        this.head = {
            value:data,
            next:null
        }
        this.tail = this.head;
        this.size = 1
    }
    // appneding new node in linked list in next address
    appendNode(nodedata){
        let newNode = {
            value:nodedata,
            next:null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    // traversing linked list
    traversing(){
        let counter = 0;
        let currNode = this.head;
        while(counter < this.size){
            console.log(currNode);
            currNode = currNode.next;
            counter++;
        }
    }
    // deleting node from any index of linked list 
    deleteNode(index){
        let counter = 1
        let lead = this.head;
        if(index == 1){
            this.head = lead.next;
        }
        else{
              while(counter < index - 1) {
                  lead = lead.next;
                  counter++;
              } 
        }
        // console.log(lead);
        let nextNode = lead.next.next;
        this.size--;
        lead.next = nextNode;
            
    }
    // Inserting node at any postion in linked list
    InsertNode(Nodedata,pos){
        let lead = this.head;
        // console.log(lead)
        let counter = 1;
         let newNode = {
                value:Nodedata,
                next:null
        }
        if(pos == 1){
            newNode.next = lead;
            this.head = newNode;
        }
        else if(pos == this.size){
            this.appendNode(Nodedata);
            this.size--;
        }
        else{
             while(counter < pos - 1){
                lead = lead.next;
                counter++;
            }
            let nextOfLead = lead.next;
            newNode.value = Nodedata;
            newNode.next = nextOfLead;
            lead.next = newNode;
        }
               
        this.size++;
        
    }
    // Search node by their value...........................
    SearchNodebyValue(val){
        let curr = this.head;
        let counter = 1;
        while(counter <= this.size && curr.value != val){
                 curr = curr.next;
                 counter++;
         }
        if(counter > this.size) return console.log(`Node with value ${val} is not present`)
        console.log("Result Node is :" , curr);
    }

    // Search node by element or index or position..........
    SeaarchNodebyElement(elm){
        let counter = 1;
        let curr = this.head;
        while(counter <= this.size && counter < elm){
            curr = curr.next
            counter++;
        }
        if(counter > this.size) return console.log(`Node Search out of bound`)
        
        console.log("Result Node is : " , curr)
        
    }
}
let list = new List(1);
list.appendNode(2)
list.appendNode(3)
list.appendNode(4);
list.appendNode(19);
list.appendNode(9);


console.log(list);
// list.InsertNode(5,3);
// list.deleteNode(3);

// list.traversing();
list.SearchNodebyValue(454);
list.SeaarchNodebyElement(6);
// list;