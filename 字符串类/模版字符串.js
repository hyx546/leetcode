function template(str,obj){
  return str.replace(/\$\{(\w+)\}/g,(match,key) => {
    return obj[key]
  })
}

console.log(template('hrllpo ${name} is ${age}',{name:'htx',age:16}));