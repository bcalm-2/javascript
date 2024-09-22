//Primitive
// boolean, string, number, NaN, null, undefined, Symbol
const booleanValue = false;
const stringValue = "this is string value"
const numberValue = 12.34;
const nullValue = null;
let undefinedValue;
let undefinedValue2 = undefined;
let symbolValue = Symbol("this is a symbol")
console.log(booleanValue, stringValue, numberValue, nullValue,
     undefinedValue, undefinedValue2, symbolValue);
console.log(typeof symbolValue)

// Non-Primitive
// object
const objectValue = {
    "firstName": "Vikram",
    "secondName": "Singh"
}
console.log(objectValue.firstName)
console.log(objectValue['secondName'])
console.log(objectValue['address'])

objectValue["firstName"] = "Srashti";