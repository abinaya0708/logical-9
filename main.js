document.write("Write a program to check whether an input is an array or not"+"<br>");
function test(a)
{
    if(typeof a== "object")
    {
        return true;
    }
    return false;
}
document.write(test([1,2,3,4])+"<br>");
document.write(test("Abinaya")+"<br><br>");