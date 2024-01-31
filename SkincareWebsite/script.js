function bigImg(x) {
    x.style.transform = "scale(1.4)";
  }
  
  function normalImg(x) {
    x.style.transform = "scale(1)";
  }
  function bigImg2(x) {
    x.style.transform = "scale(1.1)";
  }
  /*---------------------------------*/
  function Email(inputtxt) {
    var letters =/^[A-Za-z0-9+_.-]+@(.+)\.(.+)$/;
       if (!inputtxt.value.match(/\S/)) {
             alert("Textul lipseste!");
             return false;
         }
   else if (inputtxt.value.match(letters)) {
       return true;
    } 
    else {
       alert("Email gresit introdus,m-ai incearca!");
       return false;
    }
 } 
 function Password(inputtxt) {
  var letters =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
     if (!inputtxt.value.match(/\S/)) {
           alert("Textul lipseste!");
           return false;
       }
 else if (inputtxt.value.match(letters)) {
     return true;
  } 
  else {
     alert("Parola trebuie sa contina minimum 8 caractere,cel putin o majuscula,o minuscula si un numar!");
     return false;
  }
} 
function repeatPass(inputtxt){
  var pass=document.getElementById("parola2").value;
  if(!inputtxt.value.match(pass)){
alert("Parola nu se potriveste cu cea de mai sus!");
  }
  else{
    alert("Inregistrat cu succes!");
    return true;
  }
}
function focusP(x){
x.style.borderWidth="2px";
x.style.borderColor = "#fc83bb";
}
function blurP(x){
  x.style.borderWidth="0px";
}