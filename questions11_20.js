// Question 11 
function foo() {
    let a = b = 0;
    a++;
    return;
}
foo();
console.log(typeof (a)); //undefined
console.log(typeof (b)); //number -- because b is of global scope -- optional chaining 

//---------------------------------------------------------------------------------------
//Question 12: whats the difference between and guess the o/p
function arrayFormValue(item) {
    return
    [item];
}
console.log(arrayFormValue(10)); //undefined

function arrayFormValue(item) {
    return [item];
}

console.log(arrayFormValue(10)); //Array with 10 as element

//---------------------------------------------------------------------------------------
//Question 13 
console.log(0.1 + 0.2 === 0.3) //false because 0.1+0.2 = 0.3333 

//---------------------------------------------------------------------------------------
//Question 14
// console.log(myVar) //undefined
// console.log(myConst)//error
var myVar = 10;
const myConst = 20;

//---------------------------------------------------------------------------------------
//Question 15
var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); //bar
        console.log("outer func:  self.foo = " + self.foo); //bar 
        (function () {
            console.log("inner func:  this.foo = " + this.foo); //undefined 
            console.log("inner func:  self.foo = " + self.foo); //bar 
        }());
    }
};
myObject.func();
//outer function points to myObject
//inner function points no longer points to the myObjet but the scope of self is still present in local - so the bar is printed

//---------------------------------------------------------------------------------------
//Question 16
function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return
    {
        bar: "hello"
    };
}

console.log(foo1() === foo2()) //false
console.log(foo1()) //object
console.log(foo2()) //undefined as a semi column automatically inserted after the return statement

//---------------------------------------------------------------------------------------
//Question 17
// (function () {
//     console.log(1);
//     setTimeout(() => { console.log(2) }, 1000);
//     setTimeout(() => { console.log(3) }, 0);
//     console.log(4);
// })();
//1 4 3 2

//---------------------------------------------------------------------------------------
//Question 18
var d = {};
['zebra', 'horse'].forEach(function (k) {
    d[k] = undefined;
});
console.log(d); //properties with zebra and horse are added with values as undefined 

//---------------------------------------------------------------------------------------
//Question 19
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1);// 4 3 
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); // 

//---------------------------------------------------------------------------------------
//Question 20
console.log(1 + "2" + "2"); //1 22
console.log(1 + +"2" + "2");//32 -- unary operator converts the string "2" into number  
console.log(1 + -"1" + "2");//02 -- same as above
console.log(+"1" + "1" + "2");//112
console.log("A" - "B" + "2");//Nan subtraction of 2 strings is Nan
console.log("A" - "B" + 2);//Nan2 - same as above





