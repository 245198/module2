
function fibNum(a,b,num,count)
{
    if(count<num)
    {
    var c=a+b;
    document.write(c+" ");
    count=count+1;
    var n=b;
    var m=c;
    fibNum(n,m,num,count);
    }
   
}

function findFib()
{
var number=document.getElementById("number").value;

var a=0,b=1,count=2;
document.write(a+" "+b+" ");
fibNum(a,b,number,count);

}