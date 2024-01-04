import { MDBIcon } from 'mdb-react-ui-kit';
function PaymentComponent({onReturnToShipping})
{
    return(
        <>
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
        <div className="row bg-light d-flex align-items-center border-top p-2">
          <div className="col-4">
            <p>Method</p>
          </div>
          <div className="col-4">
            <p>Standard. Rs 169.0</p>
          </div>
          <div className="col-4 d-flex justify-content-end small">
            <a href="#" className="m-1 text-dark text-decoration-underline">Change</a>
          </div>
        </div>
      </div>
      <div></div>
     <h6><b>Payment </b></h6>  
     <p>All transactions are secure and encrypted.</p>
      <div className="container border rounded  mb-5">
    
     <div className="row bg-light d-flex align-items-center p-2">
     <label>
        <input
          type="radio"
          value="option2"
        />
        <span style={{ marginLeft: '10px' }}>Pay via (Debit/Credit cards/Wallets/Installments)</span>
      </label>
    </div>
    <div className="row bg-light d-flex align-items-center border-top p-2">
      <label>
        <input
          type="radio"
          value="option2"
        />
        <span style={{ marginLeft: '10px' }}>Card & Online Payments</span>
      </label>
      </div>
      <div className="row bg-light d-flex align-items-center border-top p-2">
      <label>
        <input
          type="radio"
          value="option2"
        />
        <span style={{ marginLeft: '10px' }}>Cash on Delivery (COD)</span>
      </label>
      </div>
      <div className="row bg-light d-flex align-items-center border-top p-2">
      <label>
        <input
          type="radio"
          value="option2"
        />
        <span style={{ marginLeft: '10px' }}>Bank Deposit</span>
      </label>
      </div>
    </div>
    <h6><b>Billing address </b></h6>  
     <p>Select the address that matches your card or payment method.</p>
      <div className="container border rounded  mb-5">
    
     <div className="row bg-light d-flex align-items-center p-2">
     <label>
        <input
          type="radio"
          value="option2"
        />
        <span style={{ marginLeft: '10px' }}>Same as shipping address</span>
      </label>
    </div>
    <div className="row bg-light d-flex align-items-center border-top p-2">
      <label>
        <input
          type="radio"
          value="option2"
        />
        <span style={{ marginLeft: '10px' }}>Use a different billing address</span>
      </label>
      </div>
    </div>
    <div className="d-flex justify-content-between mt-3">
       <div className='d-flex align-items-center small' >
       <MDBIcon
                        icon="angle-left"
                        className="m-1 mx-2 fa-lg"
                        style={{ color: '#60676F' }}
            />
            <a href="#" className="m-1 text-dark text-decoration-none"  onClick={onReturnToShipping}>
                        Return to Shipping </a>
           
          </div>
        <button className="btn btn-primary">Complete Order</button>
      </div>
      
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
    )
}
export default PaymentComponent