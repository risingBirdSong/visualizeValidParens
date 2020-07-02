import * as React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";

class VisualizeCode extends React.Component {
  constructor(props: any) {
    super(props);
    this.represent = this.represent.bind(this);
  }

  represent() {
    return `
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
`;
  }

  componentDidMount() {
    Prism.highlightAll();
  }
  componentDidUpdate() {
    Prism.highlightAll();
  }
  render() {
    return (
      <pre>
        <code className="language-ts">{this.represent()}</code>
      </pre>
    );
  }
}

export default VisualizeCode;
