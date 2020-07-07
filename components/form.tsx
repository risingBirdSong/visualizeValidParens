import * as React from "react";

interface FormI {
  setParentString: React.Dispatch<React.SetStateAction<string>>;
  curStr: string;
  resetAlgo: React.Dispatch<React.SetStateAction<string>>;
  formStr: string;
  setform: React.Dispatch<React.SetStateAction<string>>;
}
//todo
const Form = (props: FormI): JSX.Element => {
  const updateString = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.resetAlgo("");
    let valid = ["[", "]", "{", "}", "(", ")"];
    let str = e.currentTarget.value;
    let strArray = Array.from(str);
    let rdcd = strArray.reduce<string | false>((acc, cur, idx):
      | string
      | false => {
      return acc === false ? false : valid.includes(cur) ? (acc += cur) : false;
    }, "");
    rdcd === false
      ? (() => {
          props.setParentString("please enter only valid braces");
          props.setform("");
        })()
      : ((str: string) => {
          props.setParentString("");
          props.setform(str);
        })(rdcd);
  };
  // console.log()
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <form className="col">
          <div className="form-group">
            <label>input a string of braces</label>
            <input
              className="form-control"
              value={props.formStr}
              onChange={(e) => {
                updateString(e);
              }}
              type="text"
            />
          </div>
        </form>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Form;
