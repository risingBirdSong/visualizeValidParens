import * as React from "react";

const ExplainBraces = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          id="explainbraces"
          className="explainblock modal fade show col-md-6 justify-content-center"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="ExplainBracesCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content ">
              {/* gave a unique classname bodyexplainbraces to differentiate from the other same classname */}
              <div className="modal-body bodyexplainbraces">
                {/* <div className="row"> */}
                <h1 className="text-center">hello</h1>
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
