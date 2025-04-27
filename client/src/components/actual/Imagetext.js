import styles from '../../css/myfile.module.css'
function Imagetext({ imgdis, image }) {
    if (imgdis) {
        return (
            <div className={`text-center mt-5 p-3 ${styles.imgdiv} d-flex justify-content-center align-items-center`} style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>
            </div>

        )
    }
    else {
        return (
            <div className={` text-center mt-5 p-3  text-white ${styles.imgdiv}  d-flex justify-content-center align-items-center`}>
                <div>
                    <h1 className='mb-3'><b>START A QUIZ TO FIND BEST</b></h1>
                    <button className="btn btn-primary rounded">START</button>
                </div>
            </div>
        )
    }
}
export default Imagetext