
const display = document.getElementById("display")

function appendToDisplay(input){
    if (display.value == "SYNTAX ERROR"){
        display.value = ""
    }

    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value).toLocaleString();
    }

    catch(error){
        display.value = "SYNTAX ERROR"
    }
}