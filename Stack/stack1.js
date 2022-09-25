let max = 5;
let arr = [];
function push(new_val){
    inpt.value = ""
    if(arr.length < max){
        arr[arr.length] = new_val;
        display_stack();
    }
    else alert("Stack is full")
}
let stackBox = document.getElementById('stackBox');

function display_stack(){{
    stackBox.textContent = ""
    arr.map((item)=>{
        stackBox.textContent += ` ${item}`
    })
}}

let inpt = document.getElementById('inpt');
let push_btn = document.getElementById('push_btn');
push_btn.addEventListener('click',()=>{
    push(parseInt(inpt.value))
})