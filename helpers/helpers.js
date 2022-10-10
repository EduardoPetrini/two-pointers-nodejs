const stringToArrayOfNumbers = (str) => {
  if (!str) {
    return;
  }

  const stringSplitted = str.split(',');
  const arrayOfNumbers = stringSplitted.map(Number);

  return arrayOfNumbers;
}

const toNumber = (str) =>{
  if(!str){
    return;
  }

  const number = Number(str);

  return number;
}

export { stringToArrayOfNumbers, toNumber };
