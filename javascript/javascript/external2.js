
function calfact(num)
{
 if(num>1)
  {
   return num*calfact(num-1); 
  }
 else
  {
   return 1;
  }
}
function factorial()
{
    var number=document.getElementById("number").value; 
    var res = calfact(number);
    document.write(res);
}