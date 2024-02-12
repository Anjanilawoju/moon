const xhr= new XMLHttpRequest();
xhr open=("GET","url",True);
xhr onload=function(){
console.log(this.responseText)
}
xhr.send();


const axious=request("axious");
const apiUrl="http.jsonplaceholder";

axious.get(apiUrl)
    .this(response=>{
        console.log('Response Status:',response status);
        console.log("Response Data:",response data);
    })
    .catch(error=>{
        console.log("Error",error.message);
    })


function factorial(n){
    if(n==0 || n==1){
        return 0;
    }
    else{
        return n*factorial(n-1);
    }
}

let numtofind=10;
let result=factorial(numtofind);

console.log("The factorial of{numtofind} is:${result}")


function samelastDigit(num1,num2){
    const lastDigit1=num1%10;
    const lastDigit2=num2%10;

return lastDigit1===lastDigit2;
}
const no1=123;
const no2=345;
const result=samelastDigit(no1,no2);
console.log('DO ${no1} and ${no2} has same last digits? ${result}')


