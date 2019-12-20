function identity<T>(arg: T): T {
  return arg;
}

const str = identity<string>("hello");
const num = identity(23); //类型推断为number

console.log(str);
console.log(num);

// 传入数组
function identity1<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

identity1([1, 2, 3]);

// 函数
let identity2: <U>(arg: U) => U = identity;
const bool = identity2(false);
console.log(bool);

//也可写成如下形式:
let identity3: { <T>(arg: T): T } = identity;
const n = identity3(123);
console.log(n);

// 我们再把它写到interface里面:

interface GenericIdentityFn<T> {
  (arg: T): T;
}

let identity4: GenericIdentityFn<string> = identity;
const s = identity4("world");
console.log(s);

//类泛型
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};
