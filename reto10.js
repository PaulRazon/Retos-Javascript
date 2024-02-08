function createChristmasTree(ornaments, height) {
    let caracteres= ornaments.split('')
    let arbol=''
    let aux=0
    for(let i=0; i<=height; i++){
        for(let k = 0; k < height-i; k++) {
            arbol += ' ';
        }
        for(let j=0;j<i;j++){
            if(aux===caracteres.length){
                aux=0
                arbol+=caracteres[aux]+" "
            }else{
                arbol+=caracteres[aux]+" "
            }
            aux++;
        }
        
        arbol+="\n"
    }
    for(let l = 0; l < height-1; l++) {
        arbol += ' ';
    }
    arbol += "|\n";

    return arbol
}

console.log(createChristmasTree('abcde',3))