let notas = [];
let promedio = document.getElementById("promedio");
let notas_p = document.getElementById("notas");

function agregar(){
    let num = document.getElementById("num_input").value;
    notas.push(num);
    notas_p.innerText += num +","
    console.log(notas);
}

function calcularPromedio(){
    let acum = 0;
    for(let i = 0; i < notas.length; i++){
        acum += parseInt(notas[i]);
    }
    let prom = acum / notas.length;
    console.log("Promedio de notas: " + prom);
    promedio.innerText ="Promedio de notas: " +prom;
    alert("Promedio de notas: " + prom)
}