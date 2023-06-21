let input = document.getElementById("input");
let add  = document.getElementById("add");
let boxs = document.querySelectorAll(".box");
let drag = null;


// fisrt function 

add.onclick = function one (){
    if (input.value != ""){
        boxs[0].innerHTML += `
        <p class="item" draggable="true" > ${input.value}</p>`;
        input.value="";
    } 
    dragItems();
};

input.addEventListener("keydown" ,function (event){
    if (event.key === "Enter") { if (input.value != ""){
        boxs[0].innerHTML += `
        <p class="item" draggable="true" > ${input.value}</p>`;
        input.value="";
    } 
    dragItems();
}
} )
    

// second function 

function dragItems(){
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
            item.addEventListener("dragstart" , function (){
                drag = item;
                item.style.opacity = "0.5"
            })
            item.addEventListener("dragend" , function (){
                drag = null;
                item.style.opacity = "1"; 
            })

            boxs.forEach(box => {
                box.addEventListener("dragover",function(e){
                e.preventDefault();
                this.style.background="blue";
                this.style.color="white"
                })
                box.addEventListener("dragleave",function(){
                    this.style.background="white";
                    this.style.color="black";
                    })
                box.addEventListener("drop",function(){
                    box.append(drag);
                    this.style.background="white";
                    this.style.color="black";
                    })
            })
    })
}

