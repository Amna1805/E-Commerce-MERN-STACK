import React from "react";
import styles from "../../css/myfile.module.css";
import slider2 from "../../images/slider2.jpg";
import { MDBIcon } from "mdb-react-ui-kit";
import { useEffect,useRef } from "react";
import { Link } from "react-router-dom"; 
function CartComp({ onClose}) {
  const cartRef = useRef(null);
  const handleWheel = (e) => {
    e.preventDefault();
  };

  const handleOutsideClick = (e) => {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      onClose();
    }
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    document.body.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.body.style.overflow = 'auto'; // Enable scrolling
      document.body.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);
  
  return (

    <div   style={{position: "fixed", top: 0,left: 0,width: "100%",height: "100%",backgroundColor: "rgba(0, 0, 0, 0.6)",zIndex: 1,display: "flex",justifyContent: "center",alignItems: "center",}}>
      <div ref={cartRef}  style={{ padding: "20px",backgroundColor: "white", position: "relative", maxWidth: "500px",width:"500px"}}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="position-relative m-1">
              <img
                src={slider2}
                alt="Product 1"
                className="img-thumbnail mr-3"
                style={{ width: '90px', height: '90px', borderRadius: '20%' }}
              />
              <span className="position-absolute top-0 end-0 badge rounded-circle bg-secondary">1</span>
            </div>
            <div>
              <h6 className="m-2 my-0">Product name 1</h6>
              <small className="m-2 text-muted">Brief description 1</small>
              <div className={`d-inline-block d-flex align-items-center border m-2 ${styles.borderContainer}`}>
                <button className="btn btn-sm btn-outline-secondary rounded-0 border-0 ">
                  -
                </button>
                <span className="mx-2">1</span> {/* Quantity */}
                <button className="btn btn-sm  rounded-0 border-0 ">
                  +
                </button>
              </div>

            </div>
          </div>
          <span className="text-muted">$12</span>
        </div>

        {/* Discount Code */}
        <div className="list-group-item m-2" style={{ background: 'none', border: 'none' }}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Discount code" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-success" style={{ marginLeft: '5px' }}>Apply</button>
            </div>
          </div>
        </div>

        {/* Subtotal */}
        <div className="list-group-item d-flex justify-content-between m-3" style={{ background: 'none', border: 'none' }}>
          <span>Subtotal (USD)</span>
          <strong>$20</strong>
        </div>
        <div className="d-flex justify-content-center mt-3">
        <Link to="/detailedcart">
        <button style={{ marginRight: "10px",borderRadius: "20px", padding: "10px 50px",  background: "#61bc64",border: "1px solid #ccc", marginBottom: "10px",color: "white"}} >
          View Cart
        </button>
        </Link>
        <Link to="/checkout">
        <button style={{ marginRight: "10px",borderRadius: "20px", padding: "10px 50px",  background: "#ee6103",border: "1px solid #ccc", marginBottom: "10px",color: "white"}} >
          Checkout
        </button>
        </Link>
       
        </div>
        <div className="list-group-item " style={{ background: 'none', border: 'none' }}>
          <p className="text-center " style={{ fontSize: '12px' }}>Shipping, taxes, and discount codes calculated at checkout.</p>
        </div>
        <button style={{position: "absolute",top: "-10px",right: "-10px",borderRadius: "50%",width: "40px",height: "40px",display: "flex",justifyContent: "center",alignItems: "center", background: "#ee6103", color: "white",border: "none", }} onClick={onClose}>
          <MDBIcon icon="times" />
        </button>
      </div>
    </div>
  );
};

export default CartComp;
