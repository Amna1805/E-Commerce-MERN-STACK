// ShippingComponent.js
import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
function ShippingComponent({ onContinueToPayment, onReturnToInformation }) {
 
  return (

    <>
    <form className="needs-validation mt-4" noValidate>
    <div className="container border rounded mt-5 mb-5">
        <div className="row bg-light d-flex align-items-center p-2">
          <div className="col-4">
            <p>Contact</p>
          </div>
          <div className="col-4">
            <p>john.doe@example.com</p>
          </div>
          <div className="col-4 d-flex justify-content-end small">
            <a href="#" className="m-1 text-dark text-decoration-underline">Change</a>
          </div>
        </div>
        <div className="row bg-light d-flex align-items-center border-top p-2">
          <div className="col-4">
            <p>Ship to</p>
          </div>
          <div className="col-4">
            <p>House 2266....</p>
          </div>
          <div className="col-4 d-flex justify-content-end small">
            <a href="#" className="m-1 text-dark text-decoration-underline">Change</a>
          </div>
        </div>
      </div>
     
     
     <div className="container">
     <h6>Shipping Method </h6>  
      <div className="row bg-light rounded border d-flex align-items-center">
        <div className="col-10">
          <h6 className="mt-3 mb-3">Standard</h6>
        </div>
        <div className="col-2">
          <h6 className=" mt-3 mb-3">Rs 169.0</h6>
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-between mt-3">
       <div className='d-flex align-items-center small' >
       <MDBIcon
                        icon="angle-left"
                        className="m-1 mx-2 fa-lg"
                        style={{ color: '#60676F' }}
            />
             <a href="#" className="m-1 text-dark text-decoration-none" onClick={onReturnToInformation}>
            Return to Information
          </a>
           
          </div>
          <button className="btn btn-primary" onClick={onContinueToPayment}>
          Continue to Payment
        </button>
      </div>
      </form>
      <div className="row  d-flex align-items-center justify-content-start mt-5 p-2">
      <hr className="my-3 " style={{ borderTop: '1px solid #60676F' }} />
          <div className="col-3 small" >
            <a href="#" className="text-dark text-decoration-underline">Refund policy</a>
          </div>
          <div className="col-3 small">
            <a href="#" className="text-dark text-decoration-underline">Shipping policy</a>
          </div>
          <div className="col-3 small">
            <a href="#" className="text-dark text-decoration-underline">Privacy policy</a>
          </div>
          <div className="col-3 small">
            <a href="#" className="text-dark text-decoration-underline">Terms of service</a>
          </div>
      </div>
   </>
  
  );
}

export default ShippingComponent;
