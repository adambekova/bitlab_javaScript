
var abStr=prompt("Insert a and b seperated by space")
var abArray=abStr.split(' ')
var a=parseInt(abArray[0])
var b=parseInt(abArray[1])
if(a%b===0)
{
    alert("Divisible")
}
    else { 
        alert("Not Divisible")
    }
