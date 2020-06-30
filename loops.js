





function forLoop(array){
let theOutput = [];

  for (let i = 0 ; i < 25 ; i++){
    theOutput.push(`I am ${i} strange loop${i <= 1 ? 's' : ''}.`)
  }

  return theOutput;
}
