function InformationComponent({ onContinueToShipping })
{
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onContinueToShipping();
  };
    return(

        <>
         <form className="needs-validation mt-4" noValidate onSubmit={handleFormSubmit}>
         <div className='mb-4'>
             <div className="mt-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h6>Contact</h6>
              <p>Already have account? <a href='#'>Login In</a></p>
              </div>
              <input type="text" className="form-control mb-3" id="emailOrPhone" placeholder="Enter your email or phone number" required />
              <input type="checkbox" className="custom-control-input m-1" id="emailMeCheckbox" />
              <label className="custom-control-label" htmlFor="emailMeCheckbox">Email me with news and offers</label>
          </div>
         
            <h6>Shipping address</h6>
           
            <div className="row">
            <div className="col-md-12 mb-3">
              <select className="custom-select form-control d-block w-100" id="country" required>
                <option value="">Country/Region</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
              </select>
              <div className="invalid-feedback"> Please select a valid country. </div>
            </div>
                <div className="col-md-6 mb-3">
                <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
                <div className="invalid-feedback"> Valid first name is required. </div>
                </div>
                <div className="col-md-6 mb-3">
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
                <div className="invalid-feedback"> Valid last name is required. </div>
                </div>
                
            </div>
                
            <div className="mb-3">
                <input type="text" className="form-control" id="address" placeholder="Address" required />
                <div className="invalid-feedback"> Please enter your shipping address. </div>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
            </div>
            <div className='row'>
            <div className="col-md-6 mb-3">
                <input type="text" className="form-control" id="firstName" placeholder="City" required />
                <div className="invalid-feedback"> Valid first name is required. </div>
                </div>
                <div className="col-md-6 mb-3">
                <input type="text" className="form-control" id="lastName" placeholder="Alternate Phone No" required />
                <div className="invalid-feedback"> Valid last name is required. </div>
            </div>
             </div>  
            <div className="mb-3">
                <input type="text" className="form-control" id="address2" placeholder="Phone" />
            </div>

            <div className="custom-control custom-checkbox ">
                <input type="checkbox" className="custom-control-input m-1" id="save-info" />
                <label className="custom-control-label m-1" htmlFor="save-info">Save this information for next time</label>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <div className="col-md-3 mb-3">
                <button className="btn btn-primary btn-sm" style={{fontSize:"14px"}} type="submit">Continue to Shipping</button>
              </div>
            </div>
            </form>
            </>
    )
}
export default InformationComponent;