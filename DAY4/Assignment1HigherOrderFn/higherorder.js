
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
//slice
const ansslice=foods.slice(1,4);
console.log(ansslice);

const splicefoods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
//splice
splicefoods.splice(2,0,"noodles","icecream");
console.log(splicefoods);

const numberArray = [12,324,213,4,2,3,45,4234];

//filter
const iseven=numberArray.filter(num=>num%2==0);
console.log(iseven);

 function prime(numberArray){
    let p =numberArray.filter(data => {
      for(var i=2;i<=Math.sqrt(data);i++)
      {
        if(data % i == 0)
        {
          return false;
        }
       }
        return true;
    });
    console.log(p);
 };
 prime(numberArray);
 
//reject
function reject(numberArray) 
{
    let nonprime = numberArray.filter((number) => 
    {
      for (var i = 2; i <= Math.sqrt(number); i++) 
      {
        if (number % i == 0) 
        return true;
      }
      return false;
    });
    console.log(nonprime);
}
reject(numberArray);

//Lambda

const isevenLam=numberArray.filter(num=>num%2==0);
console.log(isevenLam);


const myArray = [11, 34, 20, 5, 53, 16];

//Map

function squareofNumber(myArray)
{
    let n=myArray.map(num=>{
        return num*num;
    })
    console.log(n);
}
squareofNumber(myArray);

function multiply(myArray)
{
    let m=myArray.reduce(function(total,num){
       return  total*num;
    })
    console.log(m);
}
multiply(myArray);