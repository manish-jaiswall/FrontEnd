const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

//   1. group Retail Companies,

const retail =companies.filter(function(Company){
    if(Company.category=="Retail")
    {
        return true;
    }
})
console.log(retail);

// 2.group 80's companies,

const eighties=companies.filter(function(Company){
    if(Company.start>=1980 && Company.start<1990)
    {
        return true;
    }
})
console.log(eighties);


//3. companies that lasted for 10years or more,

const LastedTenYears=companies.filter(function(Company){
    if(Company.end-Company.start>=10)
    {
        return true;
    }
})
console.log(LastedTenYears);

// 4.map ages*20,

const mapAge=ages.map(age=>age*20)

console.log(mapAge);

// 5.sort ages both accending and decending order

let Asort=ages.sort((a,b)=>a-b);
console.log(Asort);
let Dsort=ages.sort((a,b)=>b-a);
console.log(Dsort);


// 6.get total years for all comapnies

const cmap=companies.map(Company=>Company.end-Company.start)
console.log(cmap);

const Tyears=cmap.reduce((total,ages)=>total+ages);
console.log(Tyears);