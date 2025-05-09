import React, { useEffect, useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import slider2 from "../../images/sample.avif";
import { MDBIcon } from "mdb-react-ui-kit";
import styles from "../../css/myfile.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CardOverlay from "./Card3Component";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Card1Component({ width, product }) {
  const { width: screenWidth } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [display, setDisplay] = useState("none");
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (screenWidth <= 768) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [screenWidth]);

  const handlePlusButtonClick = () => {
    setShowOverlay(!showOverlay);
    document.body.style.overflow = showOverlay ? "auto" : "hidden";
  }; // Declare the image URL variable
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Set imageUrl when product is loaded
    if (product && product.imageURL) {
      setImageUrl(product.imageURL);
      console.log("imageudd", product.imageURL)
    }

  }, [product]); // Ensure this runs when product changes

  return (
    <>
      <Card
        style={{
          width: width,
        }}
        className="m-3 p-2"
        onMouseEnter={() => setDisplay("flex")}
        onMouseLeave={() => setDisplay("none")}
      >
        <Link to="/view-product" className={styles.linkstyle}>
          <Card.Img variant="top" src={imageUrl} style={{ height: '200px' }} />
        </Link>
        <Card.Body>
          <Link to="/view-product" className={styles.linkstyle}>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Card.Text>
              <h6 style={{ color: 'red' }}>Rs. {product.price}</h6>
            </Card.Text>
            <Card.Text>
              <div className={styles.testimonialStars}>

                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />

              </div>
            </Card.Text>
          </Link>
          {!isExpanded ? (
            <div>
              <button
                className={`${styles.searchIconCard}`}
                style={{
                  position: "absolute",

                  top: "2%",
                  right: "-5%",
                  transform: "translateY(-50%)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: display,
                }}
                onClick={handlePlusButtonClick}
              >
                <MDBIcon icon="plus" />
              </button>
            </div>
          ) : (
            <button
              className={`${styles.searchIconCard}`}
              style={{
                position: "absolute",
                top: "2%",
                right: "-4%",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              onClick={handlePlusButtonClick}
            >
              <MDBIcon icon="plus" />
            </button>
          )}
        </Card.Body>

      </Card>
      {showOverlay && <CardOverlay onClose={handlePlusButtonClick} />}
    </>
  );
}

export default Card1Component;
