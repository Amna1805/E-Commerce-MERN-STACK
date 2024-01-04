import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import styles from '../../css/myfile.module.css'; 

export default function Footer1component() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted'>
      <div className={`text-center p-4 ${styles.header}` }>
        <strong>
        © 2024 Copyright @ All rights are reserved.
        </strong>
        
      </div>
    </MDBFooter>
  );
}