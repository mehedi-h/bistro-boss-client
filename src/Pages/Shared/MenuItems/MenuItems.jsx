

const MenuItems = ({item}) => {

    const { name, image, price, recipe } = item
    return (
        <div className="flex md:space-x-4">
            <img className="w-[100px]" style={{borderRadius: '0px 220px 220px 220px'}} src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-amber-500">
                ${price}
            </p>
        </div>
    );
};

export default MenuItems;