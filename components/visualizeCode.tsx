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
      <div className="container ">
        <div className="row">
          <div
            id="thecodeblock"
            className="codeblock container modal fade col-md-6 offset-md-2 justify-content-center"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div
                className="modal-content"
                // style={{
                //   width: "1400px",
                //   height: "1000px",
                //   backgroundColor: "beige",
                // }}
              >
                <pre>
                  <code className="modal-body language-ts">
                    {this.represent()}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VisualizeCode;