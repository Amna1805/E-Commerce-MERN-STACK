import Card2Component from "../helper/Card2Component";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useState, useEffect } from "react";
import styles from "../../css/myfile.module.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Card1Component from "../helper/Card1Component";
import Productcategories from "./Productcategories";
import Pagination from "react-js-pagination";
import Card1ListComponent from "../helper/Card1ListComponent";
import axios from "axios"; // Ensure axios is imported

export default function CategoryProductComp({ categoryID }) {
  const { width } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [hamburgerButton, setHamburgerButton] = useState(true);
  const [showCard2, setShowCard2] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [activePage, setActivePage] = useState(1);

  // API data states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0); // For pagination

  // Fetch products based on category ID and active page
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://localhost:7034/api/Product/category/${categoryID}`);
        console.log("products", response.data)
        setProducts(response.data); // Assuming response contains 'products'
        //setTotalItems(response.data.totalCount); // Assuming response contains 'totalCount' for pagination
        setError(null);  // Clear any previous error
      } catch (err) {
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryID, activePage]);

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
    setActivePage(pageNumber);
  };

  return (
    <div className="d-flex flex-nowrap m-3">
      {!isExpanded && width > 1024 && (
        <div className={`m- ${showCard2 && styles.stickyCard} `}>
          <Card2Component width={"250px"} />
        </div>
      )}

      <div className="m-2">
        <div className="d-flex justify-content-between align-items-center">
          {width <= 1024 ? (
            <div className="m-3">
              <button
                className={`${styles.navIcon} ${hamburgerButton
                  ? styles["animation-rotate-enter"]
                  : styles["animation-rotate-exit"]
                  } `}
                onClick={handleToggleClick}
              >
                <MDBIcon icon={hamburgerButton ? "filter" : "times"} />
                <span className="icon-title p-2">
                  <b>Filter</b>
                </span>
              </button>
            </div>
          ) : null}
          <strong>Products ({totalItems})</strong>
          <div className={`m - 1 d - flex align - items - center ${styles['custom-select-container']} `}>
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
          {showCard2 && (
            <div
              className={`position - sticky start - 0 top - 0 ${styles.overlay} ${showCard2
                ? styles["animation-slide-in"]
                : styles["animation-slide-out"]
                } `}
              style={{
                height: "500px",
                overflowY: "auto",
              }}
            >
              <Card2Component width={`${width - 70} px`} />
            </div>
          )}

          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className={`d - flex flex - wrap position - relative`}>
              {gridView ? (
                <div className="d-flex flex-wrap position-relative">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      style={{
                        width: width <= 615
                          ? "100%"  // Full width for small screens
                          : width <= 768
                            ? "50%"   // 2 cards per row for medium screens
                            : width <= 992
                              ? "33%"   // 3 cards per row for larger screens
                              : width <= 1024
                                ? "33%"   // 3 cards per row for larger screens
                                : "33%"   // 3 cards per row for extra large screens
                      }}
                    >
                      <Card1Component product={product} />  {/* Pass the product data to Card1Component */}
                    </div>
                  ))}
                </div>


              ) : (
                products.map((product) => (
                  <Card1ListComponent key={product.id} width={"100%"} product={product} />
                ))
              )}
            </div>
          )}

          <div className="d-flex justify-content-center">
            <div style={{ zIndex: 1 }}>
              <Pagination
                activePage={activePage}
                totalItemsCount={totalItems}
                pageRangeDisplayed={5}
                onChange={handleActivePage}
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
