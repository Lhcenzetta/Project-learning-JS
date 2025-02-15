var content = document.getElementById("content")
const Button = document.getElementById("btn")
const ListTask = document.getElementById("List")
function AddTask(){
    if(content.value === ''){
        alert("You must be add somthing!!")
    }
    else{
        let NewTask = document.createElement("li");
        NewTask.innerHTML = content.value;
        ListTask.appendChild(NewTask)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        NewTask.appendChild(span);
    }
    content.value = "";
}
Button.addEventListener('click',AddTask)

ListTask.addEventListener("click",function(e){
    if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
},false)