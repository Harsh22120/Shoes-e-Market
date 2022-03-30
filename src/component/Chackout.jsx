import React from 'react'

const Chackout = () => {
  return (
    <React.Fragment>
    <div className="bg-secondary border-top p-4 text-white mb-3">
      <h1 className="display-6">Checkout</h1>
    </div>
    <div className="container mb-3">
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-header">
            <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                Contect Infomation
                </label>

              {/* <IconEnvelope className="i-va" /> Contact Info */}
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile no"
                    aria-label="Mobile no"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header">
            <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                 Shipping Infomation
                </label>

              {/* <IconTruck className="i-va" /> Shipping Infomation */}
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Addresss"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address 2 (Optional)"
                  />
                </div>
                <div className="col-md-4">
                  <select className="form-select" required>
                    <option value>-- Country --</option>
                    <option>United States</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select" required>
                    <option value>-- State --</option>
                    <option>California</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header">
            <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                  Billing Infomation
                </label>

              {/* <IconReceipt className="i-va" /> Billing Infomation */}
              <div className="form-check form-check-inline ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                  Same as Shipping Infomation
                </label>
              </div>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Addresss"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address 2 (Optional)"
                  />
                </div>
                <div className="col-md-4">
                  <select className="form-select" required>
                    <option value>-- Country --</option>
                    <option>India</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select" required>
                    <option value>-- State --</option>
                    <option>Gujrat</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Benglor</option>
                    <option>Pune</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 border-info">
            <div className="card-header bg-info">
            <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                  Payment Method
                </label>

              {/* <IconCreditCard2Front className="i-va" /> Payment Method */}
            </div>
            <div className="card-body">
              <div className="row g-3 mb-3 border-bottom">
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      defaultChecked
                      required
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit card
                      
                      <img
                        src="../assets/payment/cards.webp"
                        alt="..."
                        className="ml-3"
                        height={26}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      PayPal
                      &nbsp;
                      <img
                        src="../assets/payment/paypal_64.webp"
                        alt="..."
                        className="ml-3"
                        height={26}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name on card"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Card number"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Expiration month"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Expiration year"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer border-info row">
              <button type="button" className="btn btn-block btn-info">
                Pay Now <strong>$162</strong>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
            <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                  Cart {" "}
                </label>

              {/* <IconCart3 className="i-va" /> Cart{" "} */}
              <span className="badge bg-secondary float-right">3</span>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$150</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$50</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">−$50</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$162</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>

  )
}

export default Chackout