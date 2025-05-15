const passwordbox = document.querySelector("#password")
const input_press = document.querySelector(".input_press")
const copy_btn = document.querySelector(".copy_btn")


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbole = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


const allchars= upperCase+ lowerCase+number+symbole;
const lent = 12;

function crearPassword() {
     let password ="";
     password += upperCase[Math.floor(Math.random() * upperCase.length)]
     password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
     password += number[Math.floor(Math.random() * number.length)]
     password += symbole[Math.floor(Math.random() * symbole.length)]

     while(lent>password.length){
     password += allchars[Math.floor(Math.random() * allchars.length)]
          

     }

     passwordbox.value=password;

}

function copyPassword(){
   passwordbox.select();
   document.execCommand("copy")
}


input_press.addEventListener("click",function(){
     crearPassword()
})
copy_btn.addEventListener("click",function(){
     copyPassword()
})