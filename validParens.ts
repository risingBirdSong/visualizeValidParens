type parens = "[" | "]" | "(" | ")" | "{" | "}"

interface lookupI {
  "(": ")";
  "[": "]";
  "{": "}";
}



const validParens = (str: string): boolean => {
  if (str.length % 2 !== 0) {
    return false;
  }
  let validStrings = ["[", "]", "(", ")", "{", "}"];
  let lookup: { [idx: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  let encounters = [];
  for (let s of str) {
    if (!validStrings.includes(s)) {
      console.error("a non valid string character was passed");
      return false;
    }
    if (Object.keys(lookup).includes(s)) {
      encounters.push(lookup[s])
    }
    else {
      if (encounters.pop() === s) {
        console.log('valid so far');
      }
      else return false;
    }
  }
  return true;
}

console.log(validParens("(()())"))

