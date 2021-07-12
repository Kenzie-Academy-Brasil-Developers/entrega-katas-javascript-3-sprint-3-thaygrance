
function showResults(cabecalho, resultado){
    // Create a div, with class "bar", and set the width to 100px.
     let newElement = document.createElement("ul");
     newElement.className = "katas3";

     let newKata = document.createElement("li")
     newKata.innerText = resultado;

     // Place a text label inside the new div.
     newElement.appendChild(newKata);
    
     // Put the new div on the page inside the existing element "d1".
     let destination = document.getElementById("katas3");
     destination.appendChild(cabecalho);
     destination.appendChild(newElement);
}


function kata1() {
    let resultado ="";
    for (let counter = 1; counter <= 25; counter++) {
    resultado += counter + ", "      
    } 
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 1"
return showResults(cabecalho, resultado)
}
kata1()


function kata2() {
    let resultado ="";
    for (let counter = 25; counter >= 1; counter--) {
    resultado += counter + ", "      
    } 
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 2"
return showResults(cabecalho, resultado)
}
kata2()

function kata3() {
    let resultado ="";
    for (let counter = -1; counter >= -25; counter--) {
    resultado += counter + ", "      
    } 
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 3"
return showResults(cabecalho, resultado)
}
kata3()

function kata4() {
    let resultado ="";
    for (let counter = -25; counter <= -1; counter++) {
    resultado += counter + ", "      
    } 
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 4"
return showResults(cabecalho, resultado)
}
kata4()

function kata5() {
    let resultado ="";
    for (let counter = 25; counter >= -25; counter -=2) {
    resultado += counter + ", "      
    } 
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 5"
return showResults(cabecalho, resultado)
}
kata5()

function kata6() {
    let resultado ="";
    for (let counter = 3; counter <= 100; counter+=3) {
    resultado += counter + ", "      
    } 
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 6"
return showResults(cabecalho, resultado)
}
kata6()

function kata7() {
    let resultado ="";
    for (let counter = 3; counter <= 100; counter+=3) {
    resultado += counter + ", "      
    } 
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 7"
return showResults(cabecalho, resultado)
}
kata7()

function kata8() {
    let resultado ="";
    for (let counter = 3; counter <=99; counter++) {
        if (counter % 3 === 0) {
            resultado += counter + ", "
        } 
        else if (counter % 7 === 0)
        resultado += counter + ", "      
    } 

    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 8"
return showResults(cabecalho, resultado)
}
kata8()

function kata9() {
    let resultado ="";
    for (let counter = 5; counter <=95; counter+=10) {
    resultado += counter + ", "
    }    
let cabecalho = document.createElement ("h2")
cabecalho.innerText = "Kata 9"
return showResults(cabecalho, resultado)
}
kata9()

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata10(){
    const resultado = []
    for (let counter = 0; counter < sampleArray.length; counter++) {
           resultado.push (sampleArray[counter])
    }
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 10"
    return showResults(cabecalho, resultado)
}
kata10()

function kata11() { 
    const resultado = []
    for (let counter = 0; counter < sampleArray.length; counter++) {
        if (sampleArray[counter] % 2 === 0) {
            resultado.push (sampleArray[counter])
         }      
   }
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 11"
    return showResults(cabecalho, resultado)
  
}
kata11()

function kata12() { 
    const resultado = []
    for (let counter = 0; counter < sampleArray.length; counter++) {
        if (sampleArray[counter] % 2 !== 0) {
            resultado.push (sampleArray[counter])
         }      
   }
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 12"
    return showResults(cabecalho, resultado)
  
}
kata12()

function kata13() { 
    const resultado = []
    for (let counter = 0; counter < sampleArray.length; counter++) {
        if (sampleArray[counter] % 8 === 0) {
            resultado.push (sampleArray[counter])
         }      
   }
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 13"
    return showResults(cabecalho, resultado)
  
}
kata13()

function kata14() { 
    const resultado = []
    for (let counter = 0; counter < sampleArray.length; counter++) {
    resultado.push (sampleArray[counter]*sampleArray[counter])
    }      
   
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 14"
    return showResults(cabecalho, resultado)
  
}
kata14()

function kata15() { 
   let resultado = 0
   for (let counter = 1; counter <=20; counter ++ ) {
       resultado = (counter +resultado)
   }
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 15"
    return showResults(cabecalho, resultado)
}
kata15()

function kata16() {
    let resultado = 0
    for (let counter = 0; counter <sampleArray.length; counter++) {
           resultado = (sampleArray[counter] + resultado)
    }
    
    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 16"
    return showResults(cabecalho, resultado)
}
kata16()

function kata17() {
    let resultado = ""
    resultado = Math.min.apply(Math, sampleArray)

    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 17"
    return showResults(cabecalho, resultado)
}
kata17()

function kata18() {
    let resultado = ""
    resultado = Math.max.apply(Math, sampleArray)

    let cabecalho = document.createElement ("h2")
    cabecalho.innerText = "Kata 18"
    return showResults(cabecalho, resultado)
}
kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
