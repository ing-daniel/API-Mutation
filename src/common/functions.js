const hasMutation = (_secuencias) =>{
    let existeHorizontal = false;
    let existeVertical = false;
    let existeOblicua = false;

    existeHorizontal = horizontal(_secuencias)
    if(existeHorizontal) return true;

    existeVertical = vertical(_secuencias)
    if(existeVertical) return true;

    existeOblicua = oblicua(_secuencias);
    if(existeOblicua) return true;
  
    return false;
  }
  
  const horizontal = (_secuencias) => {
    return countMutation(_secuencias);
  }
  
  const vertical = (_secuencias) => {
    let newArray = [];
    for (let i = 0; i < _secuencias[0].length; i++) 
        newArray = [...newArray, _secuencias.map((e) => e[i]).join('')];
    return countMutation(newArray);
  }

  const recorridoIzqDer = (_secuencias) =>{
    let existe = false;
    let cadena = '';
    
    for (var i=0;i<_secuencias.length;i++) {
      cadena = '';
      for (var j=0;j<=i;j++) 
        cadena += _secuencias[i-j][j];
      
      if(cadena.length > 3)
        if(exitsMutation(cadena)) {
          existe = true;
          break;
        }
    }

    if(existe) return existe;

    for (var i=0;i<_secuencias.length;i++) {
      cadena = '';
      for (var j=0;j<_secuencias.length-i-1;j++) 
        cadena += _secuencias[_secuencias.length-j-1][j+i+1];
      
      if(cadena.length > 3)
        if(exitsMutation(cadena)) {
          existe = true;
          break;
        }
    }

    return existe;
  }

  const recorridoDerIzq = (_secuencias) =>{
    let existe = false;
    let cadena = '';

    for (var i=0;i<_secuencias.length;i++) {
      cadena = '';
      for (var j=0;j<i+1;j++) 
        cadena += _secuencias[j][_secuencias.length-1-i+j];
      
      if(cadena.length > 3)
        if(exitsMutation(cadena)) {
          existe = true;
          break;
        }      
    }

    if(existe) return existe;
  
    for (var i=1;i<_secuencias.length;i++) {
      cadena = '';
      for (var j=0;j<_secuencias.length-i;j++) 
        cadena += _secuencias[i+j][j];
      
      if(cadena.length > 3)
        if(exitsMutation(cadena)) {
          existe = true;
          break;
        } 
    }

    return existe;
  }

  const oblicua = (_secuencias) =>{
    return recorridoIzqDer(_secuencias) || recorridoDerIzq(_secuencias);
  }

  const countMutation = (_secuencias) => {
    let existe = false;
    _secuencias.some(secuencia => {
        if(exitsMutation(secuencia)){
          existe = true;
          return true;
        } 
        return false;
    });
    return existe;
  }
  
  const exitsMutation = (_secuencia) => {
    return /([ACGT])\1{3,}/g.test(_secuencia); 
  }

  module.exports = hasMutation;