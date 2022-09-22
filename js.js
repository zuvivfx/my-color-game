let numCuadrados = 6;
let cuadrados = document.querySelectorAll(".square") //Selecciona todos los cuadrados
let colors = generateRandomColors(numCuadrados) //Los colores en un array. Llama a la funcion que los coloca en un array

let pickedColor = pickColor(colors) //GANADOR
let clickedColor //El color clickeado, aun sin definir
let colorDisplay = document.querySelector(("#colorDisplay")) //Selecciona el span en donde se ve el color ganador

let mensajeG = document.querySelector("#message") //Selecciona el mensaje ganador/perdedor

let h1 = document.querySelector("h1") //Selecciona el H1 
let easyBtn = document.querySelector("#easyButton")
let hardBtn = document.querySelector("#hardButton")
let resetButton = document.querySelector("#reset")
let resetear = reset() //Llamo a la funcion reset para poder cambiar de colores


for (let index = 0; index < cuadrados.length; index++) { 
    cuadrados[index].style.backgroundColor = colors[index]//Le pongo su color a cada cuadrado

    cuadrados[index].addEventListener("click", function(){ //Le genero un evento a cada cuadrado
        clickedColor = this.style.backgroundColor //Guardo el color de fondo de cada cuadrado clickeado
         if(clickedColor == pickedColor){
             mensajeG.textContent ="YOU WIN!"
             resetButton.textContent="Play again"
             //document.body.style.backgroundColor=pickedColor
            ganarEvento(pickedColor)
         }else{
             mensajeG.textContent ="TRY AGAIN"
             this.style.backgroundColor="darkgreen" //Se puede hacer document.body.style.backgroundColor
             //Copia el color del fondo
         }
    })
}
colorDisplay.textContent = pickedColor //Cambia el texto entre "the great" y guessing game

//GENERACION DE COLORES

function ganarEvento(color){ //Hace que todos los cuadrados se cambien de color al ganador
    for (let index = 0; index < cuadrados.length; index++) {
        cuadrados[index].style.backgroundColor=color
        
    }
    h1.style.backgroundColor=pickedColor

}


function randomColor(){ //Genera numeros random de colores
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    return ("rgb("+ r +", "+ g+", "+b+")")
}   

function generateRandomColors (numero){ //Pone los numeros random de colores, en arrays
    let colorsRandom = []
    for (let i = 0; i < numero; i++) {
        colorsRandom.push(randomColor())
    }
    return colorsRandom
}
function pickColor(color){ //Agarra un numero del 1 al 6
    let numeroRandom = Math.floor(Math.random() * (numCuadrados) );

  
    return color[numeroRandom]
}

//BOTONESasas
function reset (){
        resetButton.addEventListener("click", function(){
            //Para generar nuevos colores
            colors = generateRandomColors(numCuadrados);
            //Elige nuevo color ganador para el array
            pickedColor = pickColor(colors);
            //Cambia el texto del color elegido (el Colordisplay)
            colorDisplay.textContent = pickedColor;
            this.textContent = "New colors";
            mensajeG.textContent = "";
            //Cambia los colores 
            for (let i = 0; i < cuadrados.length; i++) {
              cuadrados[i].style.background = colors[i];
            }
            h1.style.background = "steelblue";
          })
}

hardBtn.addEventListener("click", function(){
        if(hardBtn.classList == "selected"){
            return
        }
        easyBtn.classList.remove("selected")
        hardBtn.classList.add("selected")
        
        numCuadrados = 6;
        colors = generateRandomColors(numCuadrados)
        pickedColor = pickColor(colors)
        colorDisplay.textContent = pickedColor;
        mensajeG.textContent=""
        resetButton.textContent="New colors"
        h1.style.background = "steelblue";
        
        for(let i = 0;i < cuadrados.length; i++){
            cuadrados[i].style.background = colors[i] //Le pone color tal cual al principio
            cuadrados[i].style.display = "block"; //Los regresa a su estado natural

        }
    })

easyBtn.addEventListener("click", function(){
        if(easyBtn.classList == "selected"){
            return
        }
        easyBtn.classList.add("selected")
        hardBtn.classList.remove("selected")

        numCuadrados = 3;
        colors = generateRandomColors(numCuadrados)
        pickedColor = pickColor(colors)
        colorDisplay.textContent = pickedColor;
        mensajeG.textContent =""
        resetButton.textContent="New colors"
        h1.style.background = "steelblue";

        for(let i = 0;i < cuadrados.length; i++){ //Itero sobre los 6 cuadrados
            if (colors[i]) { //Agarro los indices de los colores (ahora 3)
                cuadrados[i].style.background = colors[i]; //Solo le va a poner el color a 3 cuadrados
              } else {
                cuadrados[i].style.display = "none"; //A los que no le quede color, los oculta
              }
        }

    })











