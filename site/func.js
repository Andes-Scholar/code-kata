json_var = [{
    usr:"admin", 
    clave:"123", 
    nombre:"Administrador"
    },
    {
    usr:"test", 
    clave:"123", 
    nombre:"Usuario test"
    },
];


function init(){
    document.getElementById('content').innerHTML = "";
    json_var.forEach(item => {
        document.getElementById('content').innerHTML += "<p>"+item.usr+"</p>";
    });
}

function login()
{


var usr = document.getElementById('uname').value;
var pwd = document.getElementById('psw').value;



if(json_var.some(r=> r.usr === usr && r.clave === pwd)){

window.location.href = "site.html";
}
else
{
alert("Error, reintente!");
document.getElementById('uname').value = ""; 
document.getElementById('psw').value = "";
}


}




function crear(){

    var usr = document.getElementById('uname').value;
    var pwd = document.getElementById('psw').value;

    if(json_var.some(r=> r.usr === usr && r.clave === pwd)){

        alert("El usuario ya existe");
        }
        else
        {
        json_var.push({usr: usr, clave:pwd})
        console.dir(json_var);
        init();
        }
}