import styles from '../../css/myfile.module.css';
import { MDBContainer } from 'mdb-react-ui-kit';



const Header3Component = (props) => {

  return (
    <header className={`text-white py-3 ${styles.header} ${styles.mover} ${styles.down}`}>
      
      <MDBContainer>
        <nav className={`d-flex justify-content-center navbar navbar-expand navbar-dark ${styles.navbar}`}>
          <div>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="/" className={`nav-link text-white ${styles.navLink}`}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className={`nav-link text-white ${styles.navLink}`}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/products" className={`nav-link text-white ${styles.navLink}`}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className={`nav-link text-white ${styles.navLink}`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </MDBContainer>
    </header>
  );
};

export default Header3Component;
