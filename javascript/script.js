// getting all attributes
const form = document.querySelector("form"),
      eInput = document.querySelector("input"),
      text = document.querySelector(".text");

form.addEventListener("submit", (e) =>{
  e.preventDefault(); // evita el comportamiento predeterminado
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // RegEx pattern to validate emails

  form.classList.add("error")
  form.classList.remove("valid")
  if(eInput.value == ""){
    text.innerText = "El email no puede estar en blanco";
  }else if (!eInput.value.match(pattern)){ //si el patrón no coincide con el valor introducido
    text.innerText = "Por favor, introduce un email correcto";
  }else{
    form.classList.replace("error", "valid");
    text.innerText = "El email es correcto";
  }
})