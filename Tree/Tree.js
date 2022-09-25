class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BSTree{
    constructor(){
        this.root = null
    }
    createTree(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            this.InsertNode(this.root,newNode);
        }
    }
    InsertNode(root,newNode){

        if(newNode.value < root.value){
    
            if(root.left == null) root.left = newNode;
            else this.InsertNode(root.left,newNode);
            
        }
        else{
            if(root.right == null) root.right = newNode;
            else this.InsertNode(root.right,newNode);
        }
    }
    SearchNodebyValue(val){
        let currNode = this.root;
        while(currNode != null && currNode.value != val){  
            (val < currNode.value) ? currNode = currNode.left : currNode = currNode.right;
        }
        if(currNode != null) return console.log("Result Node from tree is : " , currNode);
        else console.log("No such Node is found on BSTree")
    }
    // DFS tarverse
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value)
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
        }
    }
    // BFS traverse

    BFStraverse(root){
        let queue = [];
        queue.push(root)
        while(queue.length){
            
            let current = queue.shift();

            console.log(queue);
            
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right)
            }
            console.log(current.value);
        }
    }

    minNode(node){
        return node.left ? this.minNode(node.left) : node.value;
    }
    maxNode(node){
        return node.right ? this.maxNode(node.right) : node.value;
    }

    deleteNode(root,value){
        console.log(root);
        
        if(root === null) return null;
        if(root.value && value < root.value){
            root.left = this.deleteNode(root.left,value);
        }
        else if(root.value && value > root.value){
            root.right = this.deleteNode(root.right,value);
        }
        else{    
            console.log("..",root)
            if(!root.left && !root.right){
                return null;
            }
            else if(!root.left){
                return root.right;
            }
            else if(!root.right){
                return root.left;
            }
            else{
                root.value = this.minNode(root.right);
                
                root.right = this.deleteNode(root.right,root.value);
                
            }
            
        }
        return root;
    }
}

let bst = new BSTree();

bst.createTree(20);
bst.createTree(10);
bst.createTree(30);

bst.createTree(9);
bst.createTree(12);
bst.createTree(29);
bst.createTree(39);
bst.createTree(54);
// bst.SearchNodebyValue(54)
// console.log(bst);
// bst.preOrder(bst.root);
// console.log(bst.minNode());
console.log()

bst.BFStraverse(bst.root);