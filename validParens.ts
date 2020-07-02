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
  let stack = [];
  for (let s of str) {
    if (!validStrings.includes(s)) {
      console.error("a non valid string character was passed");
      return false;
    }
    if (Object.keys(lookup).includes(s)) {
      stack.push(lookup[s])
    }
    else {
      if (stack.pop() !== s) {
        return false;
      }
    }
  }
  return true;
}

console.log(validParens("(()())"))

