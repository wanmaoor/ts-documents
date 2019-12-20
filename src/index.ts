import {
  isDone,
  num,
  str,
  arr1,
  arr2,
  arr3,
  tuple,
  c,
  x,
  number,
  obj
} from "./basicType";
import "./interfaces";
import "./generics";
let app = document.querySelector("#app");
app.innerHTML = `
  <h1>Basic Type</h1>
  ${isDone},
  ${num},
  ${str},
  [${arr1}],
  [${arr2}],
  [${arr3}],
  [${tuple}],
  ${c},
  ${number},
  ${obj.name}
`;
x();
