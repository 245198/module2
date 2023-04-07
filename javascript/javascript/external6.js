function countUp1(n1,n2) {
    document.write(n1);
    if(n1<=n2)
    {
        n1=n1+1;
        countUp1(n1,n2);
    }
}

function countDown()
{
var num1=19; 
var num2=7;
countUp1(num1,num2);
}