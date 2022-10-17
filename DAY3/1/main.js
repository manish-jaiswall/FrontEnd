// / let is block based, var is scope based i.e local or global
function add()
{
    var res=Number(document.getElementById("fno").value) + Number(document.getElementById("sno").value);
    console.log(res); 
}