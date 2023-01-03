let ar=[4,5,8,8]
// ar=[...ar]
var dup={
  
}

// console.log('ar: ', ar);

// dup['name']='yadhu'


ar.forEach(element => {
   dup[element]=(dup[element]||0)+1
   
});
console.log('dup[element]: ', dup);
