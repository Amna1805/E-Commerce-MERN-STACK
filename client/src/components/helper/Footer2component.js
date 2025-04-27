import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import styles from '../../css/myfile.module.css'; 

export default function Footer1component() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted'>
      <section className={`${styles.header}`}>
        <MDBContainer className={`text-center text-md-start mt-5`}>
          <MDBRow className={`mt-3`}>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Daraz
              </h6>

            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Our Story
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bulk / Customize Orders
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Return Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Shipping Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Terms of Service
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Rawalpindi
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

    </MDBFooter>
  );
}