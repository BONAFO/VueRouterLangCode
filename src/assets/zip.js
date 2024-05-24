export let seed = [];
let string_seed = [];

export let zip_char = [];

const genen_seed_zip = () => {
  let seed1 = "23456789".split("");
  let s = "qwertyuiopasdfghjklzxcvbnm".split("");
  let seed3 = ",-{+};_".split("");
  let seed2 = [];
  seed = seed.concat(seed1);
  for (let i = 0; i < s.length; i++) {
    seed2.push(s[i]);
    seed2.push(s[i].toUpperCase());
  }
  seed = seed.concat(seed2);
  seed = seed.concat(seed3);
};

// const genen_string_seed_zip = () => {
//   let s = "qwertyuiopasdfghjklzxcvbnm ".split("");

//   let seed2 = [];
//   let seed = [];

//   for (let i = 0; i < s.length; i++) {
//     seed2.push(s[i]);
//     seed2.push(s[i].toUpperCase());
//   }

//   let breaker = true;
//   let counter = 0;
//   let i = 0;
//   do {
//     if (i % 10 == 0 || i == 33) {
//       seed.push(null);
//     } else if (seed2[counter] != undefined) {
//       seed.push(seed2[counter]);
//       counter++;
//     } else {
//       break;
//     }
//     i++;
//   } while (breaker);

//   seed[32] = null;
//   string_seed = string_seed.concat(seed);
// };

const parseBoolArr = (bArr) => {
  return bArr.map((v) => (v ? 1 : 0));
};
// const parseBinary = (arr) => {
//   if (typeof arr[0] == "boolean") {
//     arr = parseBoolArr(arr);
//   }
//   arr = arr.join("");
//   return parseInt(arr, 2).toString(16);
// };

export function convertToBase(number) {
  const base = seed.length; // Base 64
  let result = "";
  while (number > 0) {
    result = seed[number % base] + result;
    number = Math.floor(number / base);
  }

  return result || "0"; // Manejo del caso de número 0
}

export function convertFromBase(str) {
  const base = seed.length; // Base 64

  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const digitValue = seed.indexOf(str[i]);
    result = result * base + digitValue;
  }

  return result;
}

// const binaryToNumber = () => {
//   parseInt;
// };

// const numberToBinary = (num) => {
//   return num.toString(2);
// };

// const hexaToBinary = () => {
//   var numeroHexadecimal = "2A"; // Representa el número hexadecimal 2A
//   var numeroDecimal = parseInt(numeroHexadecimal, 16); // Convierte de hexadecimal a decimal
//   var numeroBinario = numeroDecimal.toString(2); // Convierte de decimal a binario
// };


// const toBinary =()=>{
//     var binario = "";
//     for (var i = 0; i < palabra.length; i++) {
//         var ascii = palabra.charCodeAt(i).toString(2);
//         // Asegurarse de que cada caracter sea de 8 bits
//         binario += '0'.repeat(8 - ascii.length) + ascii;
//     }
//     return binario;
// }


// const toHexa=()=>{
    
// }


// const toInte =()=>{
    
// }


// const  binToString=()=>{
//      var palabra = "";
//     for (var i = 0; i < binario.length; i += 8) {
//         var caracterBinario = binario.substr(i, 8); // Tomar cada 8 bits
//         var caracterDecimal = parseInt(caracterBinario, 2); // Convertir a decimal
//         var caracter = String.fromCharCode(caracterDecimal); // Convertir a carácter
//         palabra += caracter; // Agregar el carácter a la palabra
//     }
//     return palabra;

// }



genen_seed_zip();


