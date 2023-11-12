import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

// import react ratings css
import '@smastrom/react-rating/style.css'



const Testimonials = () => {

    const [ reviews, setReviews ] = useState([])

    useEffect( () => {
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReviews(data)
        })
    }, [])

    return (
        <section className="md:my-16">
            <SectionTitle
            subHeading={'What our clients say'}
            heading={'Testimonials'}>
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews.map(review => <SwiperSlide 
                        key={review._id}>
                            <div className="flex md:flex-col items-center md:space-y-8 md:mx-40">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                  readOnly
                                />

                                <p>{review.details}</p>
                                <h3 className="md:text-2xl text-orange-500">{review.name}</h3>
                            </div>
                        </SwiperSlide> )
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;