let nums = document.querySelectorAll(".num");
let operations = document.querySelectorAll(".operation");
let screen = document.querySelector(".screen");
let btns = document.querySelectorAll(".btns");
let clear = document.querySelector(".clear");
let op1,op2,optr;
let opnd_array = [];
let opnd="";
let ans;

const clearscreen = ()=>{
    screen.innerText="";
}

btns.forEach((btn)=>{
    nums.forEach((num)=>{
        num.addEventListener("click",()=>{
            screen.innerText += num.innerText;
            console.log(num.innerText);
            opnd += num.innerText;
            console.log(opnd);
            
        })
    })

    operations.forEach((operation)=>{
        operation.addEventListener("click",()=>{
            console.log(operation.innerText);
            if(operation.innerText!=='='){
                screen.innerText += operation.innerText;
            }
                opnd_array.push(Number(opnd));
                opnd_array.push(operation.innerText);
                opnd ="";
                console.log(opnd_array);
                

            if(operation.innerText==='='){
                opnd_array.pop();
                op2 = opnd_array.pop();
                optr = opnd_array.pop();
                op1 = opnd_array.pop();
                console.log(op1,op2,optr);

                switch (optr) {
                    case "+":opnd_array.push(op1+op2);
                            break;
                    case "-":opnd_array.push(op1-op2);
                            break;
                    case "*":opnd_array.push(op1*op2);
                            break;
                    case "/":opnd_array.push(op1/op2);
                            break;
                    default:
                        break;
                }
                ans = opnd_array.pop();
                console.log(ans);
                screen.innerText = ans;
            }
        })
    })
    clear.addEventListener("click",()=>{
        screen.innerText = "";
    })
})


