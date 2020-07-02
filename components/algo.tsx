import * as React from "react";

interface AlgoI {
  algoString: string;
}

const Algo = (props: AlgoI): JSX.Element => {
  // todo reset algoRunning to false
  const [algoRunning, setRunning] = React.useState(true);
  const [algoArrBacking, setAlgoBacking] = React.useState(
    Array.from(props.algoString)
  );
  const [curIdx, setCurIdx] = React.useState(0);
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
          <div className="border border-primary">
            <label className="p-1 mg-2 bg-info text-white">stack</label>
            <h3 className="stack">[ ]</h3>
          </div>
          <div className="algoBraces border border-info container">
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
        </div>
      ) : (
        <button
          className="btn btn-outline-primary"
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
