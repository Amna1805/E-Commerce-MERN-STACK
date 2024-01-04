import Card from "react-bootstrap/Card";
import slider2 from "../../images/slider2.jpg";
import { MDBIcon } from "mdb-react-ui-kit";
import styles from "../../css/myfile.module.css";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CardOverlay from "./Card3Component";


function CardList({ width }) {
  const [display, setDisplay] = useState("none");
  const [showOverlay, setShowOverlay] = useState(false);

  const handlePlusButtonClick = () => {
    setShowOverlay(!showOverlay);
    document.body.style.overflow = showOverlay ? "auto" : "hidden";
  };

  return (
    <div style={{ display: "flex", justifyContent: "center",height:"fit-content" }} class="m-0">
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
            src={slider2}
            style={{ width: "20%", height: "80%" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
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