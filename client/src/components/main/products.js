import Footer from '../actual/Footer';
import Header from '../actual/Header';
import Imagetext from '../actual/Imagetext';
import img1 from "../../images/slider5.jpg"
import FilterBar from '../actual/Filterbar';
export default function Products(){
  return (
    <div>
      <Header/>
      <Imagetext imgdis={true} image={img1}/>
      <FilterBar/>
      <Footer/>
    </div>
  );
}

