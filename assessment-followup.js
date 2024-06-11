'use strict';
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('OK! Test PASSED.');
  } else {
    console.error('Test FAILED. Try again!');
    console.log('    actual: ', actual);
    console.log('  expected: ', expected);
    console.trace();
  }
}

// 1.evenOrOdd という名前の関数を宣言してください。
// この関数は引数として数値型の要素を持つ配列と、boolean を受け取ります。
// boolean が true の場合は、偶数のみの配列を返し、 false の場合は、奇数のみの配列を返します。

// ここにコードを書きましょう

function evenOrOdd(numArry, evenFlg) {
  if (evenFlg) return numArry.filter((elm) => elm % 2 === 0);
  return numArry.filter((elm) => Math.abs(elm % 2) === 1);
}

// test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
// test(evenOrOdd([0, 4, 36], false), []);
// test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);

// 2.findKeys という名前の関数を宣言してください。
// この関数は引数としてオブジェクトと "target" (文字列または数値) を受け取り、
// オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。

// ここにコードを書きましょう
function findKeys(object, targetString) {
  // const result = [];
  // for (const key in object) {
  //   if (object[key] === targetString) {
  //     result.push(key);
  //   }
  // }
  // return result;
  //上記のコード自分は好きです。短くするなら下記の方法はアリです。
  const keys = Object.keys(object);
  const values = Object.values(object);
  return keys.filter((elm, index) => values[index] === targetString);
}

// test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ['b', 'e']);
// test(findKeys({ 1: 'h', b: 'el', c: 'hello', d: 'hello', e: 'o' }, 'hello'), [
//   'c',
//   'd',
// ]);

// // 3.buildObject という名前の関数を宣言してください。
// // この関数は引数として 2 つの配列を受け取り、「オブジェクトを作る」
// // というその名が示す通り新しいオブジェクトを作って返します。
// // リターンするオブジェクトは、第一引数の配列の要素をオブジェクトのキーとして設定し、
// // 第二引数の配列の要素をオブジェクトの値として設定します。

// // ここにコードを書きましょう
function buildObject(keyArray, valueArray) {
  const result = {};
  keyArray.forEach((elm, index) => {
    result[elm] = valueArray[index];
  });
  return result;
}

// test(buildObject(['a', 'b', 'c'], [1, 2, 3]), { a: 1, b: 2, c: 3 });
// test(buildObject(['cat', 'dog', 'duck'], ['にゃー', 'わんわん', 'がーがー']), {
//   cat: 'にゃー',
//   dog: 'わんわん',
//   duck: 'がーがー',
// });
// test(buildObject(['cat', 'dog', 'duck'], [null, 0, NaN]), {
//   cat: null,
//   dog: 0,
//   duck: NaN,
// });
// test(
//   buildObject(
//     ['abc', 'def', 'ghi'],
//     [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//     ]
//   ),
//   { abc: [0, 1, 2], def: [3, 4, 5], ghi: [6, 7, 8] }
// );

// // 4.add という名前の関数を宣言してください。この関数は引数として 1 つの数値 x を受け取り、関数を返します。
// // 返された関数は引数として 1 つの数値 y を受けとり、'x' と 'y' の和を返します。
// // ここにコードを書きましょう
function add(x) {
  return function (y) {
    return x + y;
  };
}

// const addTwo = add(2);
// test(addTwo(3), 5);
// test(addTwo(70), 72);

// const addOneHundred = add(100);
// test(addOneHundred(3), 103);

// // 5.以下のコードを実行すると、どの順番で何が表示されるでしょうか？
// // もちろん、コードを実行する前に答えてください。なぜそうなるのか、
// // わからない場合はわかるまで調べましょう！
// function sayHello() {
//   console.log('Hello');
// }

// function sayHelloAndName(name) {
//   return 'Hello, ' + name;
// }

// const foo = sayHello();
// const bar = sayHelloAndName('JavaScript');

// console.log(foo);
// console.log(bar);

// // あなたの回答と、なぜそうなるのかの説明をここに記載してください
// //Hello、、undefind、Hello, JavaScriptの順で表示される。
// //理由は、Javascriptの仕様上、上から処理が実行されるので、最初にsayHelloのconsole.logのHelloが表示され、次にsayHelloは返す値(return文）がないのでundefindが表示される。
// //最後にsayHelloAndNameの関数を呼び出してreturnで値を返している。

// // 7.関数 map を宣言してください。
// // この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
// // コレクション内の各要素に対してコールバック関数を実行した結果を要素に持つ新しい配列を返します。
// // コールバック関数は、コレクション内のすべての要素に適用されます。
// //  ⚠️ 注意：ビルトインメソッド (.forEach(), .map()) は使用しないでください。

// // ここにコードを書きましょう

function map(object, func) {
  //配列に対してあまりfor in は使わないです。indexとして使えば動きは合ってますが、あまり見かけないかもです（可読性悪くなるので
  const result = [];
  if (Array.isArray(object)) {
    for (const elm of object) {
      result.push(func(elm));
    }
  } else {
    for (const elm of Object.values(object)) {
      result.push(func(elm));
    }
  }
  return result;
}

function addOne(num) {
  return num + 1;
}

// test(map([1, 2, 3], addOne), [2, 3, 4]);
// test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);

// // 8.関数 changeMiddle を宣言してください。
// // この関数は引数として「奇数個の単語からなる文字列(スペースで区切られる)」と「1 つの単語」を受け取り、
// // 第 1 引数の真ん中の単語を第 2 引数の単語で置き換えた新しい文字列を返します。

// // ここにコードを書きましょう
function changeMiddle(str, changeString) {
  // let stringsToArray = strings.split(' ');
  // let changeIndex = Math.floor(stringsToArray.length / 2);
  // let result = '';
  // for (const element of stringsToArray) {
  //   if (stringsToArray.indexOf(element) === 0) {
  //     result = `${element}`;
  //   } else if (stringsToArray.indexOf(element) === changeIndex) {
  //     result = `${result} ${changeString}`;
  //   } else {
  //     result = `${result} ${element}`;
  //   }
  // }
  // return result;
  //for文で回さなくて良いものはメソッド使ったほうが良いかも。mapとかforEachとか色々配列に使用できるメソッドはバンバん使ってください
  const stringArray = str.split(' ');
  stringArray.splice(Math.floor(stringArray.length / 2), 1, changeString);
  return stringArray.join(' ');
}

// test(changeMiddle('I like cats', 'love'), 'I love cats');
// test(changeMiddle('red green blue', 'yellow'), 'red yellow blue');
// test(
//   changeMiddle('red green blue white black', 'yellow'),
//   'red green yellow white black'
// );

// // 9.関数 countSomething を宣言してください。
// // この関数は引数として数値・文字列・ブーリアンを要素にもつ配列を受け取ります。
// // 要素の登場回数が最も多い型をチェックし、以下のいずれかの文字列を返してください。
// // "BOOL COUNT: x" (ブーリアンが最も多い場合) "STRING COUNT: x" (文字列が最も多い場合)
// // "NUMBER COUNT: x" （数値が最も多い場合） ※ x はその型の要素がが何回出現したかを表す。

// // ここにコードを書きましょう

function countSomething(array) {
  // let stringCount = 0;
  // let boolCount = 0;
  // let numberCount = 0;
  // for (const element of array) {
  //   if (typeof element === 'string') {
  //     stringCount++;
  //   } else if (typeof element === 'boolean') {
  //     boolCount++;
  //   } else if (typeof element === 'number') {
  //     numberCount++;
  //   }
  // }
  // if (stringCount > boolCount && stringCount > numberCount) {
  //   return `STRING COUNT: ${stringCount}`;
  // } else if (boolCount > stringCount && boolCount > numberCount) {
  //   return `BOOL COUNT: ${boolCount}`;
  // } else if (numberCount > stringCount && numberCount > boolCount) {
  //   return `NUMBER COUNT: ${numberCount}`;
  const result = {};
  for (const elm of array) {
    switch (typeof elm) {
      case 'boolean':
        result['BOOL COUNT:'] =
          result['BOOL COUNT:'] === undefined ? 1 : result['BOOL COUNT:'] + 1;
        break;
      case 'number':
        result['NUMBER COUNT:'] =
          result['NUMBER COUNT:'] === undefined
            ? 1
            : result['NUMBER COUNT:'] + 1;
        break;
      case 'string':
        result['STRING COUNT:'] =
          result['STRING COUNT:'] === undefined
            ? 1
            : result['STRING COUNT:'] + 1;
        break;
      default:
        break;
    }
  }
  const maxValue = Math.max(...Object.values(result));
  for (const elm in result) {
    if (result[elm] === maxValue) return `${elm} ${result[elm]}`;
  }
}

// test(countSomething(['a', 'b', 'c', true, false, 2]), 'STRING COUNT: 3');
// test(countSomething([true, true, false, true]), 'BOOL COUNT: 4');
// test(countSomething([true, true, 1, 0, 1, false, 1]), 'NUMBER COUNT: 4');

// // 10.関数 each を宣言してください。
// // この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
// // コレクション内の各要素に対してコールバック関数を一度だけ実行してください。
// // この関数は何もリターンしません。
// // ⚠️ 注意：ビルトインメソッド (.forEach(), .map()) は使用しないでください。

// // ここにコードを書きましょう
function each(object, func) {
  //ここも配列を受け取った時と、オブジェクトを受け取った時で自分は条件分岐します。
  for (const number in object) {
    func(object[number]);
  }
}

// each({ a: 1, b: 2, c: 3 }, console.log);
// each([4, 5, 6], console.log);

// // 上記を実行すると下記を表示するはずです
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6

// // 11.関数 compose を宣言してください。この関数は引数として funcA と funcB という 2 つの関数を受け取り、
// // 新しい関数を返します。返された関数は引数 x を受け取り、
// // funcA に x を引数として渡して得られた戻り値を funcB に引数として渡し、得られた結果を返します。

// // ここにコードを書きましょう

function compose(funcA, funcB) {
  return (num) => funcB(funcA(num));
}

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
test(baz(5), 20);
test(baz(100), 210);
