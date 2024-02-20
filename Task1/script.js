var a=[10,20,30];
var b=a;
a[1]=200;
console.log(b);
//a
var c = [...a];
a[2]=300;
console.log(c)