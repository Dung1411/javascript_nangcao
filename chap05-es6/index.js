// import {a,b,c} from './first.js';
// import xinh from './helpers.js';

// console.log(xinh.moTa());

// console.log(a);
// console.log(b);
// console.log(c);

const setValueA = () => new Promise((resolve,reject)=>{
    let status = true;
    setTimeout(()=>{
        if (status) {
            resolve([1,2,3]);
        } else {
            reject("Bị lỗi")
        }
    },1000)
  
})
let a =[];
setValueA()
.then((data)=>{return console.log(data)})
.then((data) => {data =a})
.catch((error)=> console.log(error))
