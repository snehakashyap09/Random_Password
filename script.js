const button = document.querySelector("button");
const password = document.querySelector("#password");
const coppy = document.querySelector("#imgg");
const allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+~|}{[]></-=";
const length = 12;

button.addEventListener("click",function gen(){
    let pwd = '';
    for(let i = 0; i < length ;i++){
        const inx = Math.floor(Math.random()*allChar.length);
        pwd += allChar[inx];
    }
    password.value = pwd;
    });

    function cop(){
        password.select();
        document.execCommand("copy");
    }
    coppy.addEventListener("click",cop)