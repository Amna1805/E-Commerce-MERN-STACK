import slider2 from "../../images/slider2.jpg";
function CartComponent()
{
    return(

        <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="list-group mb-3 mt-5" style={{ background: 'none', border: 'none' }}>
              <div className="list-group-item lh-condensed" style={{ background: 'none', border: 'none' }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                        <div className="position-relative m-1">
                        <img
                            src={slider2}
                            alt="Product 1"
                            className="img-thumbnail mr-3"
                            style={{ width: '80px', height: '80px',borderRadius:"20%" }}
                            />
                        <span className="position-absolute top-0 end-0 badge rounded-circle bg-secondary">1</span>
                        </div>
                        <div>
                            <h6 className="m-2 my-0">Product name 1</h6>
                            <small className="m-2 text-muted">Brief description 1</small>
                        </div>
                        </div>
                        <span className="text-muted">$12</span>
                    </div>
                </div>

                {/* Discount Code */}
                <div className="list-group-item" style={{ background: 'none', border: 'none' }}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Discount code" />
                        <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary" style={{ marginLeft: '5px' }}>Apply</button>
                        </div>
                    </div>
                </div>

                {/* Subtotal */}
                <div className="list-group-item d-flex justify-content-between" style={{ background: 'none', border: 'none' }}>
                  <span>Subtotal (USD)</span>
                  <strong>$20</strong>
                </div>
                {/* Shipping */}
                <div className="list-group-item d-flex justify-content-between"  style={{ background: 'none', border: 'none' }}>
                  <span>Shipping</span>
                  <strong>$5</strong>
                </div>
                {/* Total */}
                <div className="list-group-item d-flex justify-content-between"  style={{ background: 'none', border: 'none' }}>
                  <span>Total (USD)</span>
                  <strong>$25</strong>
                </div>
                <div className="list-group-item " style={{ background: 'none', border: 'none'}}>
                    <p className="text-center "style={{fontSize:'12px'}}>Including Rs 185.98 in taxes</p>
                </div>
              </div>
            </div>
          </div>
    )
}
export default CartComponent;