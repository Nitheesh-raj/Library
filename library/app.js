function addfunction(){
    let a=prompt("Enter a task");
    if(a!=0){
        alert("Task added");
        document.getElementById("td1").innerHTML=a;
    }
    else{
        alert("Invalid task")
    }
}
function addtime(){
    let time=prompt("Enter the time schedule");
    if(time!=0){
        alert("Time added")
        document.getElementById("td2").innerHTML=time;
    }
    else{
        alert("invalid time")
    }
}