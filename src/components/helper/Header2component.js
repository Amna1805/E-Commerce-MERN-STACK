import React, { useEffect, useState, useRef } from "react";
import styles from "../../css/myfile.module.css";
import { Link } from "react-router-dom"; 
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Header3Component from "./Header3component";
import CartComp from "../actual/CartComp";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import logo from '../../images/logo.png'

const Header2Component = () => {
  const { width } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [hamburgerButton, setHamburgerButton] = useState(true);
  const [rotateButtons, setRotateButtons] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
    document.body.style.overflow = isCartOpen ? "auto" : "hidden";
  };

  const handleToggleClick = () => {
    setRotateButtons(!rotateButtons);
    setHamburgerButton(!hamburgerButton);
  };
  useEffect(() => {
    if (width <= 768) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [width]);
  
  return (
    <div>
      <header className={`py-3 ${styles.header}`}>
        <MDBContainer className="">
          <MDBRow className="align-items-center">
          <MDBCol md='4' className="mb-2 d-flex justify-content-center col-6" >
              <Link to="/" className={`${styles.logoLink}`}>
                <img src={logo} alt="Logo" style={{ width: "80px", height: "50px", marginRight: "5px", marginLeft: "0px", marginTop: "15px" }} />
                <h1 className={styles.storeName} style={{ marginTop: "15px" }}>Daraz</h1>
              </Link>
            </MDBCol>
            <MDBCol className="col">
                  <div className={`${styles.searchContainer}`}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                      type="text"
                      className={`${styles.searchInput}`}
                      placeholder="Search"
                    />
                  </div>
                </MDBCol>
            <MDBCol md="4" className="d-flex justify-content-center ml-xs-auto col-6 mt-1">
            <Link to="/login" className={`${styles.userIcon} ${styles.linkStyle}`}>
                <FaUser />
              </Link>
              <span className="m-1 p-2"><Link to="/login" className={styles.linkStyle}>Login</Link></span>
              <span className="m-1 p-2"><Link to="/signup" className={styles.linkStyle}>Sign Up</Link></span>
              <FaShoppingCart
                className={styles.cartIcon}
                onClick={handleCartClick} // Add onClick handler for cart button
              />
              <span
                className={`m-1 p-2 ${styles.cartText}`} // Add custom style for cart text
                onClick={handleCartClick} // Add onClick handler for cart text
              >
                Cart
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </header>

      {isCartOpen && <CartComp onClose={handleCartClick}/>}

    </div>
  );
};

export default Header2Component;
