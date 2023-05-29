let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        // console.log(e.target);
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '+/-'){
            string = -string;
            document.querySelector('input').value = string;
        }
        // else if(e.target.innerHTML == '%'){
        //     string = string/100;
        //     document.querySelector('input').value = string;
        // }
        else{
            string = string + e.target.innerHTML; // bhot kuch hai jo nhi aya hai samj
            document.querySelector('input').value = string;
        }
    })
})