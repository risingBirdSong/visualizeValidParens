import * as React from "react";
import { LeftBrace, RightBrace, Space } from "./brace";
import VisualizeCode from "./visualizeCode";
import ExplainBraces from "./explainbraces";
import { Button, Popup } from "semantic-ui-react";

interface AlgoI {
  algoString: string;
}

const Algo = (props: AlgoI): JSX.Element => {
  // todo reset algoRunning to false
  const [algoRunning, setRunning] = React.useState(true);
  const [invalidMsg, setInvalid] = React.useState("");
  const [validMsg, setValid] = React.useState("");
  const [toggle, setToggle] = React.useState(false);
  const [algoArrBacking, setAlgoBacking] = React.useState(
    Array.from(props.algoString)
  );
  const [finished, finish] = React.useState(false);
  const [curIdx, setCurIdx] = React.useState(-1);
  const [curBrace, setCurBrace] = React.useState("undefined");

  const [stack, setStack] = React.useState<string[]>([]);
  const [justPopped, setPop] = React.useState<string | undefined>("");

  const lookup: { [idx: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // if (curIdx === curIdx) {

  // }

  React.useEffect(() => {
    if (Object.keys(lookup).includes(curBrace)) {
      let newStack = [...stack].concat(lookup[curBrace]);
      setStack(newStack);
      return;
    }
    const last = stack.pop();
    setPop(last);
    setTimeout(() => {
      setPop("");
    }, 1000);
    if (last && curBrace && last !== curBrace) {
      setInvalid("invalid braces!");
      console.log("invalid");
    } else if (last === curBrace) {
      setValid("found a valid pair!");
      setTimeout(() => {
        setValid("");
      }, 1000);
    }
  }, [curBrace, curIdx]);

  return (
    <div>
      <h1 className="alert alert-success">{props.algoString}</h1>
      {algoRunning ? (
        <div>
          {invalidMsg ? <h1 className="bg-danger">{invalidMsg}</h1> : ""}
          {validMsg ? <h1 className="bg-success">{validMsg}</h1> : ""}
          {finished ? <h3>algo finished</h3> : ""}
          <div className="algo-display d-flex border border-primary container p-2 m-2">
            <div className="row m-1 p-1">
              <div className="col-4">
                <Popup
                  style={{
                    border: "2px solid black",
                    margin: "3px",
                    padding: "3px",
                    width: "250px",
                    fontSize: "20px",
                  }}
                  position="left center"
                  offset={"0, 15px"}
                  className="p-1 mg-2 bg-info text-white"
                  content="each time an opening brace is encountered, the corresponding closing brace is pushed onto the stack. when a closing brace is encountered, it is compared to the top of the stack, if they match it is a valid brace and the stack is popped, if they don't match, the braces are invalid"
                  trigger={
                    <Button
                      content="stack"
                      className="btn btn-outline-primary p-2 m-2"
                      icon={"add"}
                    />
                  }
                />
                {/* <button className="ui icon button">
                  <i aria-hidden="true" className="add icon"></i>
                </button> */}
                <h1 className="stack">
                  [{" "}
                  {stack.map((val, idx, arr) => {
                    return idx < arr.length - 1 ? (
                      <span className="stackItems" key={`${val}${idx}`}>
                        {val} ,{" "}
                      </span>
                    ) : (
                      <span className="stackItems" key={`${val}${idx}`}>
                        {val}
                      </span>
                    );
                  })}{" "}
                  {justPopped ? (
                    <span className="justpopped">{justPopped}</span>
                  ) : (
                    ""
                  )}
                  ]
                </h1>
              </div>
              <div className="col-4">
                <label className="p-1 mg-2 bg-info text-white">
                  current brace
                </label>
                <h1
                  className={
                    toggle ? "highlitbrace-up stack" : "highlitbrace-down "
                  }
                >
                  {" "}
                  {curBrace}
                </h1>
              </div>
              <div className="col-4 alert-info">
                <label className="p-1 mg-2 bg-info text-white">
                  valid braces
                </label>
                <h2>
                  {" "}
                  <LeftBrace /> ( : ")", [ : "]", <LeftBrace /> : "
                  <RightBrace />
                  " <RightBrace />
                </h2>
              </div>
            </div>
          </div>
          {/* <div className="container">
            <div className="row">
              <div className="lookup col-4 alert alert-info">
                <label>valid braces</label>
                <h2>
                  {" "}
                  <LeftBrace /> ( : ")", [ : "]", <LeftBrace /> : "
                  <RightBrace />
                  " <RightBrace />
                </h2>
              </div>
            </div>
          </div> */}
          <div className="algoBraces border border-info container p-2 m-2">
            {algoArrBacking.map((brace, idx) => {
              return idx === curIdx ? (
                <span
                  key={idx}
                  style={{ display: "inline-block" }}
                  className="curbrace algoBrace align-middle"
                >
                  {brace}
                </span>
              ) : (
                <span key={idx} className="algoBrace align-middle">
                  {brace}
                </span>
              );
            })}
          </div>
          <div className="control border border-info container p-2 m-2">
            <button
              onClick={() => {
                if (finished) {
                  finish(false);
                }
                let newIdx = curIdx + 1;
                curIdx < algoArrBacking.length - 1
                  ? (() => {
                      setCurIdx(newIdx);
                      setCurBrace(algoArrBacking[newIdx]);
                      setToggle(!toggle);
                      setValid("");
                    })()
                  : (() => {
                      console.log("stack length", stack.length);
                      if (stack.length > 0) {
                        setInvalid(
                          "there are braces still in the stack, the parens are invalid!"
                        );
                      } else if (stack.length === 0) {
                        setValid(
                          "the stack has been cleared! the parens are valid!"
                        );
                      }
                      finish(true);
                      setCurIdx(-1);
                      setCurBrace("");
                    })();
              }}
              className="takestep btn btn-outline-success p-2 m-2"
            >
              take single step
            </button>
            <button className="btn btn-outline-primary p-2 m-2">
              auto mode
            </button>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-outline-primary p-1 m-1"
          onClick={() => {
            setRunning(true);
          }}
        >
          run algorithm
        </button>
      )}
      <div className="explain">
        <div className="contain">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#thecodeblock"
          >
            Launch Code
          </button>
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#explainbraces"
          >
            Explain Braces
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      ></div>
      <ExplainBraces />
      <VisualizeCode />
    </div>
  );
};

export default Algo;
