function getvalue(num){
    var screen=document.getElementById("screen");
    screen.value += num;
}


function clearresult(){
    var screen=document.getElementById("screen");
    screen.value = ""
}


function result(){
    var screen=document.getElementById("screen");
    screen.value = eval(screen.value);
}