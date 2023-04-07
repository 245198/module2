function primeNum(num) 
{
    if(num<2)
    {
        document.write("no prime numbers");
    }
    else
    {
        
        var i,j;
        
        for(i=2;i<=num;i++)
        {
            var flag=0;
            for(j=2;j<=i/2;j++)
            {
                if(i%j==0){
                    flag=1;
                    break;
                }
            }
        
            if(flag==0)
            {
            document.write(i+" ");
            }
        }
    }
}

function findPrime()
{
var number=document.getElementById("number").value;
primeNum(number);

}