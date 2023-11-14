import ChefRocommends from "../../Pages/Home/ChefRocommends/ChefRocommends";


const FoodCart = ({item}) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="card bg-base-100 md:mt-2 shadow-xl">
            <img src={image} alt="" />
            <p className="absolute right-0 md:mr-4 md:mt-3 md:px-4 md:py-1.5 bg-slate-800 text-white">${price}</p>
            <div className="p-2 md:p-4 space-y-1 md:space-y-3">
                <h2 className="text-center md:text-xl md:font-bold">{name}</h2>
                <p className="text-justify">{recipe}</p>
                <div className="text-center">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
        // <ChefRocommends></ChefRocommends>
    );
};

export default FoodCart;