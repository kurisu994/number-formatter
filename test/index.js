var numberFormat = require("../lib/index")

let a1 = "-12.0000"
let a2 = 12_0000
let a3 = 13_1277.092213
let a4 = "-2324_5124.789232"
let a5 = 9007199254740992;
let a6 = "-9007199254740992"

const _bindWith = numberFormat.bindWith()

console.log("a_1：", _bindWith(a1))
console.log("a_2：", _bindWith(a2))
console.log("a_3：", _bindWith(a3))
console.log("a_4：", _bindWith(a4))
console.log("a_5：", _bindWith(a5))
console.log("a_6：", _bindWith(a6))
console.log("=======================");
console.log("a1：", numberFormat(a1, 2))
console.log("a2：", numberFormat(a2, 2, 3))
console.log("a3：", numberFormat(a3, 2, 3, "千"))
console.log("a4：", numberFormat(a4, 2, 3, "千", "#"))
console.log("a5：", numberFormat(a5, 2, 4, "万", "."))
console.log("a6：", numberFormat(a6, 2, 4, "万", "."))