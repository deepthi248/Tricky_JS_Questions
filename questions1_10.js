
//Question1 --- answer command not executed 
timeOut = setTimeout(function () {
    clearTimeout(timeOut);
    let timeRef = setTimeout(() => {
        console.log("hello world")
    }, 500)
    clearTimeout(timeOut)
    clearTimeout(timeRef)
})

//Question 2 --- 

var a;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        a = this.responseText;
    }
}
xhttp.open("GET", "/hello-server", true)
xhttp.send();
console.log("reponse from server" + a);

/*Question 3 -- 
hello 
Uncaught TypeError: y is not a function */

x() //hello
y(); // y value is undefined hence the error 
var y = function () {
    console.log("hello");
}
function x() {
    console.log("hello");
}

//Question 4 -- 4 times index 4 and undefined is printed as the 4 settimeout functions are lined up in queue and are executed when the i =4 and there is no arr[4] element in array
const arr = [1, 2, 3, 4]
for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log("index," + i + "element" + arr[i]);
    }, 5000)
}

//Question 5 -- false n false

let a = [1, 3]
let b = [1, "2"]

console.log(a == b); //false
console.log(a === b); //false

//Question 6 -- { message: "hello deepthi!"}

function foo() {
    return {
        message: "hello deepthi!"
    }
}
console.log(foo());

// Question 7 -- Uncaught ReferenceError: i is not defined
// there is ; after for 

for (let i = 0; i < 10; i++); {
    console.log(i);
}

//Question 8 
// Q: make the array as 0 without using any  

let arr1 = [1, 2, 3, 4]
arr1.length = 0;
console.log(arr1);


//Question 9  -- ACB
function main() {
    console.log('A');
    setTimeout(
        function print() { console.log('B'); }
        , 0);
    console.log('C');
}
main();

//Question 10 --- 1 undefined 
var y = 1;

if (function f() { }) {
    y += typeof f;

}
console.log(y); //nAn