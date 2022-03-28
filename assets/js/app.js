console.log("begin--Типы данных--");
let string = "string";
let number = 42;
let boolean = true;
let object = {
    name: "name",
    age: 12,
    object: true
};
console.log(string, number, boolean, object);
console.log("end--Типы данных--");



console.log("begin--if else--");
if(string == object){
    console.log(true);
}else{
    console.log(false);
}
console.log("end--if else--");



console.log("begin--for--");
    for(var i = 0; i < 3; i++){
        console.log(i, i+1, i+2);
    }
console.log("end--for--");



console.log("begin--function--");
    function sum(a, b){
        var result = a + b;
        return result;
    }
    console.log(sum(5, 10));
console.log("end--function--");