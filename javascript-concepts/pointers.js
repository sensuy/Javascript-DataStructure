const basket = ['apples', 'oranges', 'grapes'];

// linked list: apples --> oranges --> grapes

// apples
// 8947 --> oranges
//           8742 --> grapes
//                     372 --> null

let obj1 = { a: true };
let obj2 = obj1;

obj1.a = 'booya';
delete obj1;
obj2 = 'hello';
// console.log('1', obj1);
console.log('2', obj2);
