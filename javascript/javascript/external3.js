
function countDown1(num) {
        document.write(num+"<br>");
    
        var num2 = num - 1;
    
        if (num2 > 0) {
            countDown1(num2);
        }
    }

function countDown()
{
    var number=document.getElementById("number").value; 
    countDown1(number);
}