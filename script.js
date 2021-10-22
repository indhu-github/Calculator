const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
var inputValue = '';

for(item of buttons){
  item.addEventListener('click',(e)=>{
    let buttonText = e.target.innerText;
    if(buttonText == 'X'){
      buttonText="*";
      inputValue+=buttonText;
      input.value=inputValue;
    }
    else if(buttonText =='AC'){
      inputValue = "";
      input.value = inputValue;
    }
    else if(buttonText == "="){
      input.value = eval(inputValue);
    }
    else{
      inputValue+=buttonText;
      input.value=inputValue;
    }
  })
}