// ============================================================
// Уникальность всех символов в строке

// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

function isUnique(string) {
  // 1
  // for (let i = 0; i < string.length; i += 1) {
  //   if (string.lastIndexOf(string[i]) !== i) {
  //     return false;
  //   }
  //   return true;
  // }

  // 2
  return [...new Set(string)].join('') === string;
}

// console.log(isUnique('abcdef')); // -> true
// console.log(isUnique('1234567')); // -> true
// console.log(isUnique('abcABC')); // -> true
// console.log(isUnique('abcadef')); // -> false

// ============================================================
// Плоский массив

// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.

function flatten(array) {
  const res = [];

  for (let i = 0; i < array.length; i += 1) {
    if (!Array.isArray(array[i])) {
      res.push(array[i]);
    } else {
      const flat = flatten(array[i]);
      console.log(flat);
      for (let j = 0; j < flat.length; j += 1) {
        res.push(flat[j]);
      }
    }
  }
  return res;
}

// console.log(flatten([[1], [[2, 3]], [[[[[4]]]]]])); // -> [1, 2, 3, 4]

// ============================================================

// Удаление всех повторяющихся значений в строке

// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.

function removeDupes(str) {
  // 1
  // let unic = '';
  // for (let i = 0; i < str.length; i += 1) {
  //   if (str.indexOf(str[i]) === i) {
  //     unic += str[i];
  //   }
  // }
  // return unic;

  // 2
  return [...new Set(str)].join('');
}

// console.log(removeDupes('abcd')); // -> 'abcd'
// console.log(removeDupes('aabbccdd')); // -> 'abcd'
// console.log(removeDupes('abcddbca')); // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')); // -> 'abcd'

// ============================================================

// Какая строка встречается чаще всего

// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.

function highestFrequency(array) {
  // 1
  //   const resObj = {};
  //   let maxValue = 0;
  //   let result = '';

  //   for (let i = 0; i < array.length; i += 1) {
  //     resObj[array[i]] = 0;
  //   }
  //   for (let i = 0; i < array.length; i += 1) {
  //     resObj[array[i]] += 1;
  //   }

  //   const arrKeys = Object.keys(resObj);
  //   const arrValues = Object.values(resObj);

  //   for (let i = 0; i < arrValues.length; i += 1) {
  //     if (maxValue < arrValues[i]) {
  //       maxValue = arrValues[i];
  //       result = arrKeys[i];
  //     }
  //   }

  //   return result;

  // 2 (не моє рішення)
  const resObj = new Map();
  let maxValue = 0;
  let result = '';

  for (let i = 0; i < array.length; i += 1) {
    if (!resObj.has(array[i])) {
      resObj.set(array[i], 0);
    }
    resObj.set(array[i], resObj.get(array[i]) + 1);
    if (resObj.get(array[i]) > maxValue) {
      maxValue = resObj.get(array[i]);
      result = array[i];
    }
  }
  return result;
}

// console.log(highestFrequency(['a', 'b', 'c', 'c', 'c', 'd', 'e'])); // -> c
// console.log(highestFrequency(['abc', 'def', 'abc', 'abc', 'def', 'abc'])); // -> abc
// console.log(highestFrequency(['abc', 'def', 'abc', 'def'])); // -> abc
// console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])); // -> ghi

// ============================================================

// Повернута ли строка ?

// Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните `false`.

function isStringRotated(source, test) {
  // todo
}

console.log(isStringRotated('javascript', 'scriptjava')); // -> true
console.log(isStringRotated('javascript', 'iptjavascr')); // -> true
console.log(isStringRotated('javascript', 'java')); // -> false










import { getDatabase, ref, set } from 'firebase/database';

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}