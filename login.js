var valid=()=>
{
    var password=document.getElementById("root").value 
    if(password==="Bangalore") 
    {
        confirm("Logged in successfully Do You Want To Continue To Visit Website");
    }
    else
    {
        alert("Wrong credentials");
    } 
}