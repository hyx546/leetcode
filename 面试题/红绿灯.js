// 打印red，停1s,打印yellow,停2s,打印green,停4s，循环5次


function sleep(time){
  return new Promise((resolve) => setTimeout(resolve,time))
}

async function changeColor(color,delay){
  console.log(color);
  await sleep(delay)
}

async function test(times){
  let i =0
  while (i<times) {
    await changeColor('red',1000);
    await changeColor('yellow',2000);
    await changeColor('green',4000);
    i++
  }
}

console.log(test(5));