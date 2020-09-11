/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-08-17 11:13:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-17 16:47:40
 */
//联合类型

let name: string | undefined;
// void 约束函数的返回值 表示函数不返回任何类型
function test() {
  console.log("a");
}
// never //约束函数返回值，表示函数永远不会结束
function throwError(): never {
  throw new Error();
  console.log("a");
}
// 字面量类型
let a: "A";

let obj: {
  name: string;
  age: number;
};
obj = {
  name: "a",
  age: 2,
};
// 元祖类型 长度确定，元素类型确定
let arr: [string, number];
arr = ["1", 3];

// any 类型， 可以绕过类型检查，可以复制给任何类型
let g: any;
g = undefined;
g = 2;
// 这种还是会导致隐患发生，一般在 tsconfig.json 中配置 strictNullChecks：true 这样 undefined null 不属于任何类型的子集

//类型别名

// 对已知的一些类型定义名称
type User = {
  name: string;
  age: number;
  gender: "男" | "女";
};

// 练习
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("a和b的类型应该相同，为数字或字符串");
}
combine(1, "3"); // 这样就没有提示，显然不行
// 改造一下

function combine1(a: number, b: number): number;
function combine1(a: string, b: string): string;
function combine1(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("a和b的类型应该相同，为数字或字符串");
}
// combine1(1, "3");  此处会提示参数类型错误
combine1("1", "3");
combine1(1, 3);

function demo(a: string, b: string): string {
  return a + b
}

// 可选参数
function printNum(a: number, b: number, c?: number) {
  if (c) {
    return a + b + c
  }
  return a + b
}
printNum(1, 2)
printNum(1, 2, 3)

// 默认参数
function printA(a: string, b: string, c = 0) {
  return a + b + c
}
