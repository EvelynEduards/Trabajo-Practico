
const cantidadEntrada = document.getElementById("cantidadEntrada")
  
const botonResumen = document.getElementById("botonResumen")

const categoria = document.getElementById("inputState")

const totalCompra = document.getElementById ("totalCompra")


//botonCacular.addEventListener("click",resumen)

function resumen(){
    console.log(categoria.value)
    console.log(cantidadEntrada.value)
  
    if(categoria.value == "estudiante"){
      totalCompra.innerHTML= "Total a Pagar: $" + (cantidadEntrada.value)*(40)
  } else if(categoria.value == "trainee"){
      totalCompra.innerHTML= "Total a Pagar: $" + (cantidadEntrada.value)*(100)
  } else if(categoria.value == "junior"){
      totalCompra.innerHTML= "Total a Pagar: $" + (cantidadEntrada.value)*(170)
  }

   
    //totalCompra.style.display="block"
    
  }
