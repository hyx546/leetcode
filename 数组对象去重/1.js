const myArr = [
  {
    id: 1,
    name: 'React'
  },
  {
    id: 2,
    name: 'Vue'
  },
  {
    id: 3,
    name: 'Angular'
  },
  {
    id: 4,
    name: 'React'
  }
]
let res = [] ;
let obj = {} ;
for(let i=0;i<myArr.length;i++){
  if(!obj[myArr[i].name]){
    res.push(myArr[i]);
    obj[myArr[i].name] =true
  }
}
console.log(res);
