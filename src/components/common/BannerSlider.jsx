import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderData } from "../../data"

const BannerSlider = () => {
    const settings = {

    }
    return (
    <Slider className="header-slider" {...settings}>
        {
            sliderData.map((sliderItem) => (
                <div key={sliderItem.id} className="slider-item">
                    <img src={sliderItem.image} alt={sliderItem.title} />
                    <div className="slider-item-content max-w-[800px]">
                        <h2>{sliderItem.title}</h2>
                        <p>{sliderItem.text}</p>
                    </div>
                </div>        
            ))      
        }

    </Slider>
  )
}

export default BannerSlider