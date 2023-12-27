let arr = [];
function add(){
    let n = document.querySelector("#field").value;
    arr.push(n);
    document.querySelector(".output").innerHTML= arr;
}

function remove(){
    arr.pop();
    document.querySelector(".output").innerHTML=arr;
}

function fRemove(){
    arr.shift();
    document.querySelector(".shift").innerHTML = arr.join(", ");
}
document.querySelector(".updated").innerHTML = arr.join(". ");
