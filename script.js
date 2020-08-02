var arr = [1,2,3,4,5,6];
var x = 6;
var rez = divv(summ(arr), x);
console.log(rez);


function divv(q, p){
    var z = q/p;
    return z;
}

function summ(arr)
{
var sum = arr.reduce(function(a, b)
    {
      return a + b;
    }, 0);
    return sum;
}
//change 1

console.log(arr[2]);

