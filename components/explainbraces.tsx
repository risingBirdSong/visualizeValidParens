import * as React from "react";

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
                <div className="text-center">
                  <p>
                    valid braces are pairs of complementary braces, opening and
                    closing.
                  </p>
                  <label htmlFor="">example</label>
                  <h3>( )</h3>
                  <h3>[]</h3>
                  <p>
                    any amount of other valid braces may be contained inside an
                    outer pair of valid braces , so long as at each depth of
                    nesting, the braces complement each other.
                  </p>
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
