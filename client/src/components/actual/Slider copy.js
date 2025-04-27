import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../images/slider1.jpg'
import slider3 from '../../images/slider3.jpg'
import slider4 from '../../images/slider4.jpg'
function Slider() {
    return (
        <div>
            <Carousel showThumbs={false} showArrows={false} showStatus={false} showIndicators={true} stopOnHover={false} infiniteLoop={true} autoPlay={true} swipeable={true} dynamicHeight={true} interval={2000}>
                <div>
                    <img src={slider1} />
                </div>
                <div>
                    <img src={slider3} />
                </div>
                <div>
                    <img src={slider4} />
                </div>
            </Carousel>
        </div>

    )
}
export default Slider