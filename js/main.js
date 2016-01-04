userChoice = document.getElementById("userChoice");
button = document.getElementById("button");
result = document.getElementById("result");
randomPc = Math.floor(Math.random() * 10)+1;

function pcRandom() {
    if (userChoice.value<0){
       return result.innerHTML += "<br>" + userChoice.value + " ? Vraiment? Vous devriez relire l'énoncé !";
     }
    if (userChoice.value>10){
       return result.innerHTML += "<br>" + userChoice.value + " ? Vraiment? Vous devriez relire l'énoncé !";
    }
  if (userChoice.value < randomPc) {
    result.innerHTML += "<br>" + userChoice.value + " est inférieur au chiffre sorti par l'ordinateur, réessayez !";
  }
  if (userChoice.value > randomPc) {
    result.innerHTML += "<br>" + userChoice.value + " est supérieur au chiffre sorti par l'ordinateur, réessayez !";
  }
  if (userChoice.value == randomPc){
     alert("Bien ouèj !");
   }
userChoice.value = "";
};

button.onclick = pcRandom;
