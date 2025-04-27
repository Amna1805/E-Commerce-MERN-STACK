import Card2Component from "../helper/Card2Component";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useState, useEffect } from "react";
import styles from "../../css/myfile.module.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Card1Component from "../helper/Card1Component";
import Productcategories from "./Productcategories";
import Pagination from "react-js-pagination";
import Card1ListComponent from "../helper/Card1ListComponent";
export default function FilterBar() {
  const { width } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [hamburgerButton, setHamburgerButton] = useState(true);
  const [showCard2, setShowCard2] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [activePage, setActivePage] = useState(1);

  const handleToggleClick = () => {
    setExpanded(!isExpanded);
    setHamburgerButton(!hamburgerButton);
    setShowCard2(!showCard2);
  };

  const handleGridViewClick = () => {
    setShowCard2(false);
    setGridView(true);
  };

  const handleListViewClick = () => {
    setShowCard2(false);
    setGridView(false);
  };

  const handleActivePage = (pageNumber) => {
    setActivePage(pageNumber)
  }

  useEffect(() => {
    if (width <= 768) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
    if (width > 1024) {
      setShowCard2(false);
      setHamburgerButton(true);
    }
  }, [width]);
  return (
    <div className="d-flex flex-nowrap">
      {!isExpanded && width > 1024 && (
        <div className={`m-2 ${showCard2 && styles.stickyCard}`}>
          <Card2Component width={"250px"} />
        </div>
      )}
      
      <div className="m-2">
        <Productcategories width="250px" />
        <div className="d-flex justify-content-between align-items-center">
          {width <= 1024 ? (
            <div className="m-3">
              <button
                className={`${styles.navIcon} ${hamburgerButton
                  ? styles["animation-rotate-enter"]
                  : styles["animation-rotate-exit"]
                  }`}
                onClick={handleToggleClick}
              >
                <MDBIcon icon={hamburgerButton ? "filter" : "times"} />
                <span className="icon-title p-2">
                  <b>Filter</b>
                </span>
              </button>
            </div>
          ) : null}
          <strong>Products (192)</strong>
          <div className={`m-1 d-flex align-items-center ${styles['custom-select-container']}`}>
            <select className={`mr-2 ${styles['custom-select']}`}>
              <option value="fruit">Feature</option>
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option>
            </select>
            <span className={styles.divider}></span>
            <button onClick={handleGridViewClick}>
              <MDBIcon
                icon='fas fa-square-full mx-2 fa-lg'
                className={!gridView ? 'text-secondary' : ''}
              />
            </button>
            <button onClick={handleListViewClick}>
              <MDBIcon
                icon='fas fa-th-list mx-2 fa-lg'
                className={gridView ? 'text-secondary' : ''}
              />
            </button>
          </div>
        </div>
        <div>

        </div>
        <div>
          {showCard2 && (
            <div
              className={`position-sticky start-0 top-0 ${styles.overlay} ${showCard2
                ? styles["animation-slide-in"]
                : styles["animation-slide-out"]
                }`}
              style={{
                height: "500px",
                overflowY: "auto",
              }}
            >
              <Card2Component width={`${width - 70}px`} />
            </div>
          )}
          <div className={`d-flex flex-wrap position-relative`}>
            {gridView ? (
              <>
              <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />
                 <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />
                 <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />
               <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />
                 <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />
                 <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />

              </>
            ) : (
              <>
                <Card1ListComponent width={'100%'} />
                <Card1ListComponent width={'100%'} />
                <Card1ListComponent width={'100%'} />
              </>
            )}
          </div>
          <div className="d-flex justify-content-center">
          <div style={{ zIndex: 1 }}>
          <Pagination
            activePage={activePage}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={handleActivePage.bind(this)}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
