import * as React from "react";
import MyForm from "./form";
import Algo from "./algo";
const ValidBraces = (): JSX.Element => {
  const [message, setMsg] = React.useState("");
  //todo reset algoStringback to "" - intial state
  const [algoString, setAlgoString] = React.useState("(()))");
  const [formState, setFormState] = React.useState("");
  return (
    <div className="text-center container">
      <h1 className="alert alert-info">valid braces</h1>
      <hr />

      {algoString ? (
        <div>
          <Algo algoString={algoString} />
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setAlgoString("");
            }}
          >
            reset and pick a new string
          </button>
        </div>
      ) : message ? (
        <div>
          {" "}
          <h3 className="alert alert-danger">{message}</h3>{" "}
          <h3 className="alert alert-primary">valid chars include</h3>{" "}
          <h3 className="alert alert-success">( ) [ ] &#123; &#125; </h3>{" "}
        </div>
      ) : formState ? (
        <h3 className="alert alert-success">{formState}</h3>
      ) : (
        ""
      )}
      {!algoString ? (
        <div>
          {" "}
          <MyForm
            setParentString={setMsg}
            curStr={message}
            resetAlgo={setAlgoString}
            formStr={formState}
            setform={setFormState}
          />
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setAlgoString(formState);
              setFormState("");
            }}
          >
            valid braces check
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ValidBraces;
