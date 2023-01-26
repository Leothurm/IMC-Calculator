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

    let imc = arrayPerson[2]/ ((arrayPerson[1])*arrayPerson[1]/10000)
    
    let result ='';
    if(imc <18.5){
        result = 'Magreza';
    } else if(imc<=24.9){
        result = 'Normal';
    }else if(imc<=30){
        result = 'Obeso'
    } else{
        result = 'Obesidade grave'
    }

    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')

    let t = document.createTextNode(result)
    let b = document.createTextNode('IMC: ')
    let r = document.createTextNode(parseFloat(imc).toFixed(2)+ ' kg/m²')
    
    h1.appendChild(t)
    h2.appendChild(b)
    h2.appendChild(r)

    document.body.appendChild(h1)
    document.body.appendChild(h2)

    document.getElementById("submit").removeEventListener("click", calculateIMC)
    document.getElementById("submit").removeEventListener("click", validateForm)

}
document.getElementById("submit").addEventListener("click", calculateIMC)

