
// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. 
//Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts, materials) {
    const pasa =[]
    gifts.forEach(gift=>{
        let letras= gift.split('')
        let si = letras.every(letra =>materials.includes(letra))
        if(si){
          pasa.push(gift)
        }
      })
      return pasa
}
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'