





function forLoop(array){
  let output = [];

  for (let i = 0 ; i < 25 ; i++){
    i === 1 ? output.push(`I am 1 strange loop.`) : output.push(`I am ${i} strange loops.`);
  }

  return output;
}
