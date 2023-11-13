import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import receipe1  from "../../../assets/home/chef1.jpg"
import receipe2  from "../../../assets/home/chef2.jpg"
import receipe3  from "../../../assets/home/chef3.jpg"


const ChefRocommends = () => {
    return (
        <section className="md:mt-12 md:mb-20">
            <SectionTitle
                subHeading={"---Should Try---"}
                heading={"chef Rocommends"}>
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 md:my-20">

                <div className="card bg-base-100 shadow-xl">
                        <img src={receipe1} alt="Shoes" className="" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Thai Vegetable Beef</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex items-center justify-center md:mt-5">
                            <button className="btn btn-outline text-amber-500 border-0 border-b-2">View Full Menu</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                        <img src={receipe2} alt="Shoes" className="" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bengali Boiled Rice</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex items-center justify-center md:mt-5">
                            <button className="btn btn-outline text-amber-500 border-0 border-b-2">View Full Menu</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                        <img src={receipe3} alt="Shoes" className="" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Indian Vegetable Pasta</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex items-center justify-center md:mt-5">
                            <button className="btn btn-outline text-amber-500 border-0 border-b-2">View Full Menu</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ChefRocommends;