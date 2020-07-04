import * as React from "react";
import { Space, LeftBrace, RightBrace } from "./brace";

const ExplainBraces = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          id="explainbraces"
          className="explainblock modal fade show col-md-6"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="ExplainBracesCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div
              className="modal-content"
              id="explaincontent"
              style={{ position: "absolute", left: -218 }}
            >
              {/* gave a unique classname bodyexplainbraces to differentiate from the other same classname */}
              <div className="modal-body bodyexplainbraces">
                {/* <div className="row"> */}
                <div className="text-center d-fled justify-content-center">
                  <p>
                    valid braces are pairs of complementary braces, opening and
                    closing.
                  </p>
                  <p>examples</p>
                  <label>a valid set of parenthesis</label>
                  <h3 className="p-1 mg-2 bg-info text-white">
                    ( <Space /> )
                  </h3>
                  <label>a valid set of curly braces</label>

                  <h3 className="p-1 mg-2 bg-primary text-white">
                    {" "}
                    <LeftBrace />
                    <Space />
                    <RightBrace />
                  </h3>
                  <label>a valid set of array brackets</label>
                  <h3 className="p-1 mg-2 bg-success text-white">
                    [<Space />]
                  </h3>
                  <p>
                    any amount of other valid braces may be contained inside an
                    outer pair of valid braces , so long as at each depth of
                    nesting, the braces complement each other.
                  </p>
                  <p>take these braces for example :</p>
                  <h3>
                    (<LeftBrace />
                    []
                    <RightBrace />)
                  </h3>
                  <p>at each depth of nesting, each pair matches</p>
                  <h3 style={{}} className="p-1 mg-2 bg-info text-white">
                    ( <Space /> <Space /> <Space /> <Space /> <Space /> )
                  </h3>
                  <h3 className="p-1 mg-2 bg-primary text-white">
                    <LeftBrace /> <Space /> <Space /> <RightBrace />
                  </h3>
                  <h3 className="p-1 mg-2 bg-success text-white">[ ]</h3>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainBraces;
