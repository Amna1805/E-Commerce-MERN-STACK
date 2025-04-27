import React from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styles from '../../css/myfile.module.css'; 

const MapComponent = (props) => {


  return (
    <div className={styles.mapContainer}>
      {/* <Map
        google={props.google}
        zoom={8}
        className={styles.map}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.00, lng: -122.00 }} />
      </Map> */}
    </div>
  );
};

// export default GoogleApiWrapper({
//   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
// })(MapComponent);
export default MapComponent