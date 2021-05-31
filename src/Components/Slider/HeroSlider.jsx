import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroImg1 from '../../img/hero-img.webp';
import HeroImg2 from '../../img/hero-img-1.webp';
import './HeroSlider.scss';


const HeroSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

      const HeroContent = [
        {
            id: 'slide-1',
            caption: 'Hello World',
            imgUrl: HeroImg1,
        },
        {
            id: 'slide-2',
            caption: 'Hello World 2',
            imgUrl: HeroImg2
        },
      ];

    return(
        <div className="hero__slider">
            <Slider {...settings}>

                {
                    HeroContent.map((slideItems)=> 
                    <div key={slideItems.id}>
                        {/* <h3>{slideItems.caption}</h3> */}
                        <img src={slideItems.imgUrl} alt=""/>
                    </div>)
                }
                
                
            </Slider>
        </div>
    )
}

export default HeroSlider;