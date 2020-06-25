type parens = "[" | "]" | "(" | ")" | "{" | "}"

const validParens = (str: string): boolean => {
  if (str.length % 2 !== 0) {
    return false;
  }
  let lookup = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  let encounters: parens[] = [];
  for (let s of str) {

    if (Object.keys(lookup).includes(s)) {
      //@ts-ignore
      encounters.push(lookup[s])
    }
    else {
      if (encounters.pop() === s) {
        console.log('valid so far');
      }
      else return false;
    }
    //@ts-ignore
    // Object.keys(lookup).includes(s) ? encounters.push(lookup[s]) : encounters.pop() === s ? console.log('valid') : false;
  }
  return true;
}

console.log(validParens("((([{}])))"))

