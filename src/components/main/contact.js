import Footer from '../actual/Footer';
import Header from '../actual/Header';
import MapComponent from '../helper/MapComponent'
export default function contact() {
  return (
    <div>
      <Header />
      <div className='mt-5 mb-3 d-flex justify-content-center'>
        <ul className="list-unstyled d-flex align-items-center">
          <li className="me-5">
            <i className="fas fa-map-marker-alt"></i> Address: 123 Street, City, Country
          </li>
          <li className="me-5">
            <i className="fas fa-phone"></i> Phone: +123 456 7890
          </li>
          <li className="me-2">
            <i className="fas fa-envelope"></i> Email: example@example.com
          </li>
        </ul></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-0">
            <div style={{ width: "100%", height: "fit-content", backgroundColor: "#f0f0f0" }}>
              <MapComponent />
            </div>

          </div>
          <div className="col-md-6 mt-0">


            <div>  <h3>Contact Us</h3>
              <form className='mt-3'>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4"></textarea>
                </div>
                <div className='text-center'> <button type="submit" className="btn btn-primary">Submit</button></div>

              </form></div>

          </div>
        </div>
      </div>
 
      <Footer />
    </div>
  );
}

