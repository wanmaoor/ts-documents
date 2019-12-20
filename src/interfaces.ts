// function printLabel(labelObj: { label: string }) {
//   console.log(labelObj.label);
// }

interface LabeledValue {
  label: string;
  size?: number;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { label: "Size 10 Object" };
printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; //还有其他类型
}
interface returnSquare {
  // 给返回值也写成接口
  color: string;
  area: number;
}
// function createSquare(config: SquareConfig): returnSquare {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });

// 函数类型 函数也是一种对象嘛

//我们给函数的interface取个名字叫做签名, 只包含参数类型和返回值类型

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
};

const res = mySearch("helloworld", "llo");
console.log(res);

// 索引类型, 也可以叫索引签名

interface StringArray {
  [index: number]: string; // 使用数字来索引, 返回的是字符串
}

let myArr: StringArray = ["Alice", "Bob"];
const myStr: string = myArr[0];
console.log(myStr);

interface NumberOrStringDictionary {
  readonly [index: string]: number | string; //设置为只读
  length: number;
  name?: string;
}

let dictionary: NumberOrStringDictionary;
dictionary = ["Alice", "Bob"];
dictionary.name = "old man and sea";
console.log(dictionary.length);
console.log(dictionary.name);

//class 类型

interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  static currentTime = new Date();
}

console.log(Clock.currentTime);
