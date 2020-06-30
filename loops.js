





function forLoop(array){
  let output = [];

  for (let i = 0 ; i < 25 ; i++){
    output.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }

  return output;
}
