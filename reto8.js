// Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

// El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

// Los elfos tienen un sistema especial para organizar los regalos:

// Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
// Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
// Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
// Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

// Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

function organizeGifts(gifts) {
    //code here
    gifts = gifts.split('').join("")
    const regex = /[a-zA-Z]/g
    let aux=''
    let almacen=''
    for(let i = 0; i<gifts.length;i++){
      if(!gifts[i].match(regex)){
        aux+=gifts[i];
        
      }else{
        let res= parseInt(aux)%10
        let caja =parseInt(aux)/10
        let parle = 0
        for(let j=1;j<=parseInt(caja);j++){
          if((j%5)===0 && j>1){
            almacen+=`[${gifts[i]}]`
            parle=0
          }else{
            parle++;
          }
        }
        
        for(let j=1;j<=parle;j++){
          almacen+=`{${gifts[i]}}`
        }
        if(res!==0){
          almacen+=`(`
          for(let j =0;j<res;j++){
            almacen+=`${gifts[i]}`
          }
          almacen+=`)`
          
        }
        aux=''
      }
        
    }
    
    return almacen
  }