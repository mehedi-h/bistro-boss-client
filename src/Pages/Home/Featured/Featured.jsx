import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-img bg-fixed text-white md:pt-6 md:mb-20 md:mt-12">
            <SectionTitle
            subHeading='Check it out'
            heading='Featured item'></SectionTitle>
            <div className="md:flex justify-center items-center md:gap-16 md:px-32 md:pb-20 md:pt-12">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:space-y-3">
                    <h5>
                        November 13, 2023
                    </h5>
                    <h3 className="uppercase">
                        Where can i get some
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum laboriosam velit delectus? Accusantium voluptatem esse voluptatum, omnis repellendus laboriosam saepe nam culpa nulla expedita reprehenderit sunt atque ipsam vitae.
                    </p>
                    <button className="btn btn-outline text-white border-0 border-b-2">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;