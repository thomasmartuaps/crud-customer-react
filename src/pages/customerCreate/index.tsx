import React from "react";
import logo from "./logo.svg";
import "./App.css";

function customerCreate() {
  return (
    <div className="card">
      <div className="card-body">
        <h4>Add a new Customer</h4>
        <div className="row">
          <div className="col">
            <form method="post">
              <div
                asp-validation-summary="ModelOnly"
                className="text-danger"
              ></div>
              <div className="form-group">
                <div className="row">
                  <div className="col-4">
                    <label
                      asp-for="Customer.Name"
                      className="control-label font-weight-bold"
                    >
                      Nama
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      id="customerName"
                      asp-for="Customer.Name"
                      className="form-control"
                      placeholder="Masukkan nama perusahaan..."
                    />
                  </div>
                </div>
                <span
                  asp-validation-for="Customer.Name"
                  className="text-danger"
                ></span>
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Create"
                  asp-page-handler=""
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default customerCreate;
