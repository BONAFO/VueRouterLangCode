<template>
  <RouterView></RouterView>
</template>

<script setup>
import { convertToBase, convertFromBase, seed } from "@/assets/zip";
const toBinary = (value) => {
  let binary = "";

  if (!Number.isInteger(value)) {
    for (let i = 0; i < value.length; i++) {
      let ascii = value.charCodeAt(i).toString(2);
      binary += "0".repeat(8 - ascii.length) + ascii;
    }
  } else {
    binary = value.toString(2);
  }

  return binary;
};

const toHexa = () => {};

const binToBig = (binary) => {
  // console.log(convertToBase(parseInt(binary, 2)).length);
  // console.log(parseInt(binary, 2).toString(35));
  // return convertToBase(parseInt(binary, 2))
  // return convertToBase(parseInt(binary, 2))
  return BigInt("0b" + binary).toString(16);
};
const bigToBin = (bint) => {
  // return BigInt(bint)
  // // console.log(convertToBase(parseInt(binary, 2)).length);
  // // console.log(parseInt(binary, 2).toString(35));
  // // return convertToBase(parseInt(binary, 2))
  // // return convertToBase(parseInt(binary, 2))
  // return BigInt(parseInt(binary, 2)).toString(36)
  return BigInt("0x" + bint);
};

const binToString = (binary) => {
  let word = "";
  for (let i = 0; i < binary.length; i += 8) {
    word += String.fromCharCode(parseInt(binary.substr(i, 8), 2));
  }
  return word;
};

// const zip_binary =(binary)=>{
//     let ziped = "";
//     for (let i = 0; i < binary.length; i++) {
//         console.log(binary[i]);

//     }
// }

const calculate_base = (binary) => {
  let max_pow = 0;

  do {
    if (Math.pow(2, max_pow) >= seed.length) {
      if (Math.pow(2, max_pow) > seed.length) {
        max_pow--;
      }
      break;
    }
    max_pow++;
  } while (true);

  if (binary <= max_pow) {
    return binary;
  } else {
    return max_pow;
  }
};

const generate_table = (HEAD) => {
  let table = [];
  let equi = [];
  for (let i = 0; i < Math.pow(2, HEAD); i++) {
    table.push({ val: seed[i], bin: i.toString(2).padStart(HEAD, "0") });
  }
  return table;
};

const zip_rest = (rest) => {
  return parseInt(rest, 2);
};

const zip_binary = (binary, head) => {
  const table = generate_table(head);
  let max = Math.floor(binary.length / head);
  let token = "";
  let rest = "";

  for (let i = 0; i < max; ++i) {
    token += table.filter(
      (b) => b.bin == binary.substring(i * head, (i + 1) * head)
    )[0].val;
  }

  rest = binary.substring(max * head, binary.length);

  if (rest.length != 0) {
    rest = zip_binary(rest, rest.length)
      .replaceAll("*", "")
      .replaceAll("@", "")
      .split("|");
    rest = `${rest[0]}:${rest[2]}`;
  }
  token += "@" + rest;

  //   console.log(zip_binary());

  return `*${head}|${max}|${token}*`;
};

const unzip_rest = (rest) => {
  const [head, cont] = rest.split(":");
  const table = generate_table(head);
return table.filter((b) => b.val == cont)[0].bin;

};

const unzip_binary = (token) => {
  const [head, max, content] = token.split("|");
  const [dataco, rest] = content.split("@");
  const table = generate_table(head);
  let binary = "";
  for (let i = 0; i < dataco.length; ++i) {
    // token += table.filter(b => b.bin == binary.substring(i * head, (i + 1) * head))[0].val;
    binary += table.filter((b) => b.val == dataco[i])[0].bin;
  }
   if(rest.length != 0){
    binary += unzip_rest(rest)
   }

  return binary;
};

// console.log(toBinary("Wendigo"));

//DE STR A BINARIO

const string = "C123o'12i39'ick1o'2ui34";
const A = toBinary(string);

// console.clear();

const HEAD = calculate_base(A.length);
const ZIPPED = zip_binary(A, HEAD);

const UNZIPED = unzip_binary(ZIPPED.replaceAll("*", ""));
const palabra = binToString(UNZIPED);

console.log(string == palabra);



// ESTRUCTURA TOKEN
// *HEAD|MAX|CONTENT@REST*
// *6||aS6+*
// console.log(Math.pow(2, 6));

// const B = zip_binary(A);
// console.log("DE STR A BINARIO");
// console.log(B);
// const B = binToBig(A);
// console.log("DE BINARIO A BASE36");
// console.log(B);
// const C = bigToBin(B);
// console.log("DE BINARIO A BASE36");
// console.log(C);
// const D = C.toString(2);
// console.log("DE BINARIO A BASE36");
// console.log(D);
// const E = binToString(D);
// console.log("DE BINARIO A BASE36");
// console.log(E);

// const binint = binToInt(stringbin);
// const inttobi = convertFromBase(binint);
// const bin2 = toBinary(inttobi);
// const binstring = binToString(bin2);
// console.log(binint);
// console.log(stringbin);
// console.log(binstring);
//
</script>

<style scoped></style>
