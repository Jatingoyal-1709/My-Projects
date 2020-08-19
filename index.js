let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons)
{
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is',buttonText);        
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'D') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'B') {
            var value = document.getElementById("screen").value;
            document.getElementById("screen").value = value.substr(0, value.length - 1);
        }
        else if(buttonText=='sin'){
            var value=document.getElementById("screen").value;
            document.getElementById("screen").value=Math.sin(value);
        }
        else if(buttonText=='cos'){
            var value=document.getElementById("screen").value;
            document.getElementById("screen").value=Math.cos(value);
        }
        
        else if(buttonText=='sqrt'){
            var value=document.getElementById("screen").value;
            document.getElementById("screen").value=Math.sqrt(value);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}