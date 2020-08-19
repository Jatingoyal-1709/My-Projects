#HTML Code

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css" >
        <title>Calculator</title>
    </head>
    <body>
        <div class="container">


            <div class="calculator">
                <input type="text" name="screen" id="screen">
            <table>
                <tr>
                    <td><button>7</button></td>
                    <td><button>8</button></td>
                    <td><button>9</button></td>
                    <td><button>*</button></td>
                    <td><button>+</button></td>
                </tr>
                <tr>
                    <td><button>4</button></td>
                    <td><button>5</button></td>
                    <td><button>6</button></td>
                    <td><button>/</button></td>
                    <td><button>B</button></td>
                </tr>
                <tr>
                    <td><button>1</button></td>
                    <td><button>2</button></td>
                    <td><button>3</button></td>
                    <td><button>-</button></td>
                    <td><button>D</button></td>
                </tr>
                <tr>
                    <td><button>0</button></td>
                    <td><button>.</button></td>
                    <td><button>=</button></td>
                    <td><button>(</button></td>
                    <td><button>)</button></td>
                </tr>
                <tr>
                    <td><button>sin</button></td>
                    <td><button>cos</button></td>

                    <td><button>sqrt</button></td>

                </tr>

            </table>
        </div>
        </div>

    </body>
    <script src="index.js"></script>
    </html>


#CSS Code

    body{
        background: rgba(8, 8, 8, 0.966);

    }
    .container{
        text-align: left;
        margin-top: 30px;
    }
    table{
        margin: auto;
    }
    input{
        border-radius: 30px;
        border: 7px solid gold;
        font-size: 40px;
        width: 517px;
        height: 85px;
    }
    button{
        border-radius: 30px;
        border: 7px solid mediumslateblue;
        font-size: 45px;
        width: 95px;
        height: 90px;
        margin: 6px;
        cursor: pointer;
    }
    .calculator{
        border: 13px solid seashell;
        display: inline-block;
        padding: 20px;
        border-radius: 30px;


    }


#JS Code

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
