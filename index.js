


var regex = new RegExp( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

function f(){
    let alert = document.querySelector('.alert');
    let mail = document.getElementById('filemail')
    
    if(regex.test(mail.value)==true){
        alert.innerHTML='Email valid';
        alert.style.color='green';
    }else{
        alert.innerHTML='Email invalid';
        alert.style.color='hsl(0, 100%, 63%)';
    }
}