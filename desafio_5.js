// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


function inverterString(str) {
  // Converter a string para um array de caracteres
  var caracteres = str.split('');
  
  // Obter o tamanho da string
  var tamanho = caracteres.length;
  
  // Inverter os caracteres usando um loop
  for (var i = 0; i < tamanho / 2; i++) {
      // Trocar os caracteres de posição
      var temp = caracteres[i];
      caracteres[i] = caracteres[tamanho - i - 1];
      caracteres[tamanho - i - 1] = temp;
  }
  
  // Converter o array de caracteres de volta para uma string
  var stringInvertida = caracteres.join('');
  
  return stringInvertida;
}

// Exemplo de uso
var minhaString = "Romário Lima";
var stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
