import * as React from "react";
import * as ReactDOM from "react-dom";
import { DatePicker } from "@progress/kendo-react-dateinputs";
const App = () => {
  const [success, setSuccess] = React.useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };
   
  const today = new Date();
  return <div className="row example-wrapper">
      <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
        <div className="card">
          <div className="card-block">
            <form className="k-form" onSubmit={handleSubmit}>
              <fieldset>
                <legend>Please select dates of your stay:</legend>
                <label className="k-form-field">
                  <span>Check-In</span>
                  <DatePicker width="100%" name="checkin" required={true} min={today} />
                </label>
                <label className="k-form-field">
                  <span>Check-Out</span>
                  <DatePicker width="100%" name="checkout" required={true} min={today} />
                </label>
              </fieldset>
              <input type="submit" className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" value="Search" />
            </form>
          </div>
        </div>
      </div>
      {success && <div className="alert alert-success" style={{
      position: "absolute"
    }}>
          Form submitted!
        </div>}
    </div>;
};
ReactDOM.render(<App />, document.querySelector("my-app"));