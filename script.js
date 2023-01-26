let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let female = document.getElementById("f");
let male = document.getElementById("m");

document.getElementById("submit").addEventListener("click", validateForm);

function validateForm() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    height.value == "" ||
    (male.checked == false && female.checked == false)) {
    alert("PREENCHA TODOS OS CAMPOS");
    document.getElementById("submit").removeEventListener("click", calculateIMC)
  } else{
    calculateIMC();
}
}

function calculateIMC(){
    let arrayPerson = [age.value, height.value, weight.value]
    if(male.checked){
        arrayPerson.push("male")
    } else if(female.checked){
        arrayPerson.push("female")
    }
    console.log(arrayPerson)

}

