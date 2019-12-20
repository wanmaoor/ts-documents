const isDone: boolean = false;
const num: number = 6;
const str: string = `${isDone}, ${num + 1}`;
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [4, 5, 6];
const arr3: Array<boolean> = [false, true];
const tuple: [string, number] = ["wan", 1];
enum Color {
  Red,
  Green,
  Blue
}
const c: Color = Color.Blue;
function x(): void {
  console.log("using void");
}

// 在没有--strictNullChecks 检查下, void可以对null和undefined使用. 但实际上它们有各自对应的类型
// null & undefined是其他类型的子类型, 所以也可以对number等使用
let u: undefined = undefined;
let n: null = null;
let number: number = undefined;

// 在有--strictNullChecks 检查下, null & undefined只能对any和各自对应的类型使用了

// never
// 当一个函数根本就没有返回值时（或者总是抛出错误），它返回了一个 never
function error(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}
const obj: object = { name: "ww" };
export {
  isDone,
  num,
  str,
  arr1,
  arr2,
  arr3,
  tuple,
  c,
  x,
  u,
  n,
  number,
  error,
  infiniteLoop,
  obj
};
