import React, { useState, useEffect } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import CartComponent from '../helper/CartComponent';
import InformationComponent from '../helper/InformationComponent';
import ShippingComponent from '../helper/ShippingComponent';
import PaymentComponent from '../helper/PaymentComponent';
import styles from "../../css/myfile.module.css";

import {
  FaShoppingCart,
} from "react-icons/fa";
function Checkout() {
  const [activeComponent, setActiveComponent] = useState('information');
  const [showCartComponent, setShowCartComponent] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [showCartComponentCol, setShowCartComponentCol] = useState(true);
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'information':
        return <InformationComponent onContinueToShipping={() => setActiveComponent('shipping')} />;
      case 'shipping':
        return (
          <ShippingComponent
            onContinueToPayment={() => setActiveComponent('payment')}
            onReturnToInformation={() => setActiveComponent('information')}
          />
        );
      case 'payment':
        return <PaymentComponent onReturnToShipping={() => setActiveComponent('shipping')} />;
      default:
        return <InformationComponent />;
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const isWindowSmall = window.innerWidth < 1000;
      setShowOrderSummary(isWindowSmall);
      setShowCartComponentCol(!isWindowSmall);
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth > 1000) {
      setShowCartComponent(false);
    }
  }, [window.innerWidth]);
  const toggleCartComponent = () => {
    setShowCartComponent(!showCartComponent);
  };

  useEffect(() => {
    setShowCartComponent(false);
  }, [activeComponent]);
  return (
    <div className="container-fluid contaier -x;m-0">
      <div className="row">

        <div className="col-lg-7 col-md-7 m-0 mx-auto">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="row justify-content-center align-items-center mt-5">
                <div className="d-flex align-items-center">
                  <h4>Your Company Name</h4>
                </div>
              </div>
              {showOrderSummary ? (
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: 'black' }}
                  onClick={toggleCartComponent}
                >
                  <div
                    className="rounded p-2 mt-2 "
                    style={{
                      backgroundColor: '#F0F0F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <FaShoppingCart style={{ marginRight: '5px' }} />
                      <h6 className="mb-0" style={{ marginRight: '5px' }}>
                        Order Summary
                      </h6>
                      <MDBIcon icon="angle-down" className="fa-lg mt-1" style={{ color: '#60676F' }} />
                    </div>
                    <p className="mb-0">Rs.1390</p>
                  </div>
                </a>) : null}
              {showCartComponent ? (
                <div className='bg-light'>
                  <CartComponent />
                </div>
              )
                : null}
              <div className="cart-link-navigation d-flex justify-content-center mt-4 mb-2">
                <div
                  className={`d-flex align-items-center small ${activeComponent === 'information' ? styles.activeLink : ''
                    }`}
                  onClick={() => setActiveComponent('information')}
                >
                  <a href="#" className="m-1 text-dark text-decoration-none">
                    Information
                  </a>
                  <MDBIcon
                    icon="angle-right"
                    className="m-1 mx-2 fa-lg"
                    style={{ color: '#60676F' }}
                  />
                </div>
                <div
                  className={`d-flex align-items-center small ${activeComponent === 'shipping' ? styles.activeLink : ''
                    }`}
                  onClick={() => setActiveComponent('shipping')}
                >
                  <a href="#" className="m-1 text-dark text-decoration-none">
                    Shipping
                  </a>
                  <MDBIcon
                    icon="angle-right"
                    className="m-1 mx-2 fa-lg"
                    style={{ color: '#60676F' }}
                  />
                </div>
                <div
                  className={`d-flex align-items-center small ${activeComponent === 'payment' ? styles.activeLink : ''
                    }`}
                  onClick={() => setActiveComponent('payment')}
                >
                  <a href="#" className="m-1 text-dark text-decoration-none">
                    Payments
                  </a>
                </div>
              </div>
              {renderActiveComponent()}
            </div>
          </div>
        </div>

        {showCartComponentCol ? (
  <div className="col-lg-5 col-md-5 m-0 bg-light">
    <CartComponent />
  </div>
) : null}

      </div>
    </div>
  );
}

export default Checkout;
