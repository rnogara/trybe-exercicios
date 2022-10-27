const equivalentRoman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanToDecimal(string){
  string = string.toUpperCase();
  const romanLength = string.length;
  let roman = equivalentRoman[string[romanLength - 1]];
  let sum = equivalentRoman[string[romanLength - 1]];
  for ( let i = 2; i <= romanLength; i += 1){
    const next = equivalentRoman[string[romanLength - i]];
    if (roman <= next){
      sum += next;
    } else{
      sum -= next;
    }
    roman = next;
  }
  return console.log(sum);
}

romanToDecimal('MMXVIII');
romanToDecimal('VI');
romanToDecimal('IV');


// OUTRA FORMA PARA ESTUDAR:
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-22.php

// function roman_to_Int(str1) {
//   if(str1 == null) return -1;
//   var num = char_to_int(str1.charAt(0));
//   var pre, curr;
  
//   for(var i = 1; i < str1.length; i++){
//   curr = char_to_int(str1.charAt(i));
//   pre = char_to_int(str1.charAt(i-1));
//   if(curr <= pre){
//   num += curr;
//   } else {
//   num = num - pre*2 + curr;
//   }
//   }
  
//   return num;
//   }
  
//   function char_to_int(c){
//   switch (c){
//   case 'I': return 1;
//   case 'V': return 5;
//   case 'X': return 10;
//   case 'L': return 50;
//   case 'C': return 100;
//   case 'D': return 500;
//   case 'M': return 1000;
//   default: return -1;
//   }
//   }
//   console.log(roman_to_Int('XXVI'));
//   console.log(roman_to_Int('CI'));
  