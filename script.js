let answer = document.getElementById("answer");

inputs = document.querySelectorAll(".buttons input");
let screenValue='';
inputs.forEach((inp) => {
  inp.addEventListener("click", (e) => {
    text = e.target.value;
    console.log(text);

    if (text == "AC"){
        screenValue = " ";
        answer.value = screenValue;
    } 
    else if(text == "=") {
      answer.value = eval(screenValue)
    }
    else if( text == "DEL"){
        answer.value = answer.value.substr(0, answer.value.length-1)
    }
    else{
        screenValue += text;
        answer.value = screenValue;
    }
  });
});