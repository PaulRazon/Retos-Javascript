// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

// Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

// ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

// En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
function findFirstRepeated(gifts) {
    // Code here
    for(let i=0;i<gifts.length;i++){
  
      for(let j=0;j<i;j++){
        
        if(gifts[i]===gifts[j]&& gifts[i]!==0 ){
          
          return gifts[i]
        }
      }
    }
    return -1
}
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3