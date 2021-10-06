import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import btnPrevSlide from '../../img/btnPrevSlide.png';
import btnNextSlide from '../../img/btnNextSlide.png';

import './style/slider.scss'
import {useState} from "react";

export const Slider = () => {



    const imgSlider = [
        <img key={slide1} src={slide1} alt='slide1'/>,
        <img key={slide2} src={slide2} alt='slide2'/>
    ];

    const [activeIndex, setActiveIndex] = useState(0);


// Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : imgSlider.length - 1;
// Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === imgSlider.length - 1 ? 0 : activeIndex + 1;



    const scrollPrevSlide = () => {
        setActiveIndex(prevImgIndex);
    };

    const scrollNextSlide = () => {
        setActiveIndex(nextImgIndex);
    };



    return (

       <section className='carousel'>
           <div className='slider'>

               <div className='slider-img slider-img-prev'
                    key={prevImgIndex}>
                   {imgSlider[prevImgIndex]}
               </div>
               <div className='slider-img'
                    key={activeIndex}>
                   {imgSlider[activeIndex]}
               </div>

               <div className={'slider-img slider-img-next'}
                    key={nextImgIndex}>
                   {imgSlider[nextImgIndex]}
               </div>
           </div>
           <ul className='slider__icons'>
               <li onClick={scrollPrevSlide}>
                   <img src={btnPrevSlide} alt='previous slide'/>
               </li>
               <li onClick={scrollNextSlide}>
                   <img src={btnNextSlide} alt='next slide'/>
               </li>
           </ul>
       </section>
    )
}