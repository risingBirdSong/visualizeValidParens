import * as React from "react";
import { LeftBrace, RightBrace, Space } from "./brace";

interface AlgoI {
  algoString: string;
}

const Algo = (props: AlgoI): JSX.Element => {
  // todo reset algoRunning to false
  const [algoRunning, setRunning] = React.useState(true);
  const [algoArrBacking, setAlgoBacking] = React.useState(
    Array.from(props.algoString)
  );
  const [curIdx, setCurIdx] = React.useState(-1);
  const [curBrace, setCurBrace] = React.useState("undefined");

  return (
    <div>
      {!algoRunning ? (
        <h1>lets run the algorithm over this set of braces</h1>
      ) : (
        ""
      )}
      <h1 className="alert alert-success">{props.algoString}</h1>
      {algoRunning ? (
        <div>
          <h3>algo is underway</h3>
          <div className="algo-display d-flex border border-primary container p-2 m-2">
            <div className="row m-1 p-1">
              <div className="col-4">
                <label className="p-1 mg-2 bg-info text-white">stack</label>
                <h3 className="stack">[ ]</h3>
              </div>
              <div className="col-4">
                <label className="p-1 mg-2 bg-info text-white">
                  current brace
                </label>
                <h3 className="stack text-primary">{curBrace}</h3>
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
                <span key={idx} className="algoBrace text-primary ">
                  {brace}
                </span>
              ) : (
                <span key={idx} className="algoBrace ">
                  {brace}
                </span>
              );
            })}
          </div>
          <div className="border border-info container p-2 m-2">
            <button className="btn btn-outline-success p-2 m-2">
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
    </div>
  );
};

export default Algo;
