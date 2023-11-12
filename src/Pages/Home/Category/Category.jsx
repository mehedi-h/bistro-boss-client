import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"

const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper md:mb-10"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className='md:text-4xl md:font-semibold text-white text-center uppercase md:-mt-16'>salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className='md:text-4xl md:font-semibold text-white text-center uppercase md:-mt-16'>pizzas</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className='md:text-4xl md:font-semibold text-white text-center uppercase md:-mt-16'>soups</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className='md:text-4xl md:font-semibold text-white text-center uppercase md:-mt-16'>sandwichs</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <h3 className='md:text-4xl md:font-semibold text-white text-center uppercase md:-mt-16'>salads</h3>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;