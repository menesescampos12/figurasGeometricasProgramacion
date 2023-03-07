const calcularlaFiguraRomboide= ()=>{

    let base = document.getElementById("base").value
    let altura = document.getElementById("altura").value

    let area = base*altura

    document.getElementById("resultRomboide").innerHTML= area
}


const calcularlaFiguraCirculo = ()=>{
    const PI = 3.1416

    let radio = document.getElementById("radio").value

    let result = (PI * (radio*radio))

    document.getElementById("resultadocirculo").innerHTML= result
}



const calcularlaFiguraTrapecio = () => {
    let baseMenor = parseFloat(document.getElementById("baseMenor").value);
    let baseMayor = parseFloat(document.getElementById("baseMayor").value);
    let altura = parseFloat(document.getElementById("alturatrapecio").value);
  
   
    let resultado = altura * (baseMayor + baseMenor) / 2;
    document.getElementById("resultTrapecio").innerHTML = resultado;
    
}

const calcularlaFiguraAreaRectangulo = () =>{
    let base =document.getElementById("valorRectangulo1").value
    let altura = document.getElementById("valorRectangulo2").value

    let baseRectangulo = base * altura

    document.getElementById("resultadoRectangulo").innerHTML = baseRectangulo

}