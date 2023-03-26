function verifyPalindrome(palavra){
  let reverseWord = palavra.split('').reverse().join('');
  let palindrome = true;
  if (reverseWord === palavra){
    palindrome = true;
  } else if (reverseWord !== palavra){
    palindrome = false;
  } else {
    return console.log('algo deu errado');
  }
  return console.log(palindrome);
};
verifyPalindrome('arara');
verifyPalindrome('desenvolvimento');

function bigestArrayIndex(array){
  let bigestIndex = 0;
  for (let i in array){
    if(array[i] > array[bigestIndex]){
      bigestIndex = i;
    }
  }
 return console.log(bigestIndex);
};
console.log('');
bigestArrayIndex([2, 3, 6, 7, 10, 1]);

function smalestArrayIndex(array){
  let smalestIndex = 0;
  for (let i in array){
    if(array[i] < array[smalestIndex]){
      smalestIndex = i;
    }
  }
  return console.log(smalestIndex);
};
console.log('');
smalestArrayIndex([2, 4, 6, 7, 10, 0, -3]);

function bigestWord(palavras){
  let bigestWord = '';
  for (let i in palavras){
    if(palavras[i].length > bigestWord.length){
      bigestWord = palavras[i];
    }
  }
  return console.log(bigestWord);
}
console.log('');
bigestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

function mostRepeted(array){
  let mostRepeted = 0;
  let counterRepeated = 0;
  let counterNumber = 0;
  for (let i in array){
    let numberInArray = array[i];
    for (let n = 2; n < array.length; n += 1){
      if (numberInArray === array[n]){
        counterNumber += 1;
      }
    }
    if (counterNumber > counterRepeated){
      counterRepeated = counterNumber;
      mostRepeted = i;
    }
    counterNumber = 0;
  }
  return console.log(array[mostRepeted]);
}
console.log('');
mostRepeted([2, 3, 2, 5, 8, 2, 3]);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
function naturalCounter(number){
  if (number < 0 && Math.floor(number) !== number && number == Infinity){
    return;
  } else {
    let soma = 0;
    for (let i = 1; i <= number; i += 1){
      soma += i;
    }
    return console.log(soma);
  }
}
console.log('');
naturalCounter(5);

function endOfTheWord(stringWord, stringEnding){
  let wordReverse = stringWord.split('').reverse().join('');
  let endingReverse = stringEnding.split('').reverse().join('');
  let verifyEnding = true;
  for (let i in endingReverse){
    if (wordReverse[i] !== endingReverse[i]){
      verifyEnding = false;
    } else {
      verifyEnding = true;
    }
  }
  return console.log(verifyEnding);
}
console.log('');
endOfTheWord('trybe', 'be');
endOfTheWord('joaofernando', 'fernan');