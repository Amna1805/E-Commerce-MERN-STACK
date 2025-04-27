import Card from "react-bootstrap/Card";
import slider2 from "../../images/slider2.jpg";
import { MDBIcon } from "mdb-react-ui-kit";
import styles from "../../css/myfile.module.css";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CardOverlay from "./Card3Component";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardList({ width, product }) {
  const [display, setDisplay] = useState("none");
  const [showOverlay, setShowOverlay] = useState(false);

  const handlePlusButtonClick = () => {
    setShowOverlay(!showOverlay);
    document.body.style.overflow = showOverlay ? "auto" : "hidden";
  }; const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Set imageUrl when product is loaded
    if (product && product.imageURL) {
      setImageUrl(product.imageURL);
      console.log("imageudd", product.imageURL)
    }

  }, [product]); // Ensure this runs when product changes


  return (
    <div style={{ display: "flex", justifyContent: "center", height: "fit-content" }} class="m-0">
      <Card
        style={{
          width: width,
          margin: "5px",
          padding: "10px",
          position: "relative",
          height: "80%", // Adjust the height value as needed
        }}
        onMouseEnter={() => setDisplay("flex")}
        onMouseLeave={() => setDisplay("none")}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Card.Img
            variant="top"
            src={imageUrl}
            style={{ width: "20%", height: "80%" }}
          />
          <div style={{ marginLeft: "10px" }}>
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
          </div>
        </div>
        <div>
          <button
            className={`${styles.searchIconCard}`}
            style={{
              position: "absolute",
              top: "2%",
              right: "1%",
              transform: "translate(50%, -50%)", // Center vertically
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
      </Card>
      {showOverlay && <CardOverlay onClose={handlePlusButtonClick} />}
    </div>
  );
}

export default CardList;