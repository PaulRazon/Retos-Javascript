// En la fábrica de juguetes, los elfos están programando un reloj digital para mantenerse en horario con la producción de regalos. 
// Sin embargo, se han encontrado con un desafío de programación interesante. Necesitan una función que, dada una hora en formato 'HH:MM', 
// cree una representación visual de esta hora en un reloj digital devolviendo un array de arrays de caracteres.

// La pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora ocupa 7 filas y 3 columnas. 
// Los dígitos están compuestos por asteriscos (*) y espacios en blanco (). Entre cada dígito hay una columna vacía.

// Los dos puntos para separar horas y minutos se dibujan usando dos asteríscos (*) y siempre se colocan en la misma posición, 
// en las filas 2 y 4, en la columna 9, respectivamente (nota: la indexación de filas y columnas comienza en 0).

// Por ejemplo, si la función recibe 01:30 debe devolver:
function drawClock(time) {
    const digitos = [
      [
        ['*','*','*'],
        ['*',' ','*'],
        ['*',' ','*'],
        ['*',' ','*'],
        ['*',' ','*'],
        ['*',' ','*'],
        ['*','*','*']
      ],
      [
        [' ','*',' '],
        [' ','*',' '],
        [' ','*',' '],
        [' ','*',' '],
        [' ','*',' '],
        [' ','*',' '],
        [' ','*',' ']
      ],
      [
        ['*','*','*'],
        [' ',' ','*'],
        [' ',' ','*'],
        ['*','*','*'],
        ['*',' ',' '],
        ['*',' ',' '],
        ['*','*','*']
      ],
      [
        ['*','*','*'],
        [' ',' ','*'],
        [' ',' ','*'],
        ['*','*','*'],
        [' ',' ','*'],
        [' ',' ','*'],
        ['*','*','*']
      ],
      [
        ['*',' ','*'],
        ['*',' ','*'],
        ['*',' ','*'],
        ['*','*','*'],
        [' ',' ','*'],
        [' ',' ','*'],
        [' ',' ','*']
      ],
      [
        ['*','*','*'],
        ['*',' ',' '],
        ['*',' ',' '],
        ['*','*','*'],
        [' ',' ','*'],
        [' ',' ','*'],
        ['*','*','*']
      ],
      [
        ['*','*','*'],
        ['*',' ',' '],
        ['*',' ',' '],
        ['*','*','*'],
        ['*',' ','*'],
        ['*',' ','*'],
        ['*','*','*']
      ],
      [
        ['*','*','*'],
        [' ',' ','*'],
        [' ',' ','*'],
        [' ',' ','*'],
        [' ',' ','*'],
        [' ',' ','*'],
        [' ',' ','*']
      ],
      [
        ['*','*','*'],
        ['*',' ','*'],
        ['*',' ','*'],
        ['*','*','*'],
        ['*',' ','*'],
        ['*',' ','*'],
        ['*','*','*']
      ],
      [
        ['*','*','*'],
        ['*',' ','*'],
        ['*',' ','*'],
        ['*','*','*'],
        [' ',' ','*'],
        [' ',' ','*'],
        ['*','*','*']
      ],
      [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ','*',' '],
        [' ',' ',' '],
        [' ','*',' '],
        [' ',' ',' '],
        [' ',' ',' ']
      ],
  ];
    let numero=time.split('')
    let reloj=[]
    for(let i=0;i<5;i++){
      switch(numero[i]===':'?10:parseInt(numero[i])){
        case 0:
          reloj=reloj.concat(digitos[0])
          break;
        case 1:
          reloj=reloj.concat(digitos[1])
          break;
        case 2:
          reloj=reloj.concat(digitos[2])
          break;
        case 3:
          reloj=reloj.concat(digitos[3])
          break;
        case 4:
          reloj=reloj.concat(digitos[4])
          break;
        case 5:
          reloj=reloj.concat(digitos[5])
          break;
        case 6:
          reloj=reloj.concat(digitos[6])
          break;
        case 7:
          reloj=reloj.concat(digitos[7])
          break;
        case 8:
          reloj=reloj.concat(digitos[8])
          break;
        case 9:
          reloj=reloj.concat(digitos[9])
          break;
        case 10:
          reloj=reloj.concat(digitos[10])
          break;
        default:
          break;
      }
    }
    return reloj
  }
  console.log(drawClock('02:31'))