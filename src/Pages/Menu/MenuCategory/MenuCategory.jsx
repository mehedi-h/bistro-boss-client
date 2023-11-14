import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const MenuCategory = ({ items, title, img, brief}) => {
    return (
        <div className="md:my-24">
            {
                title && 
                <Cover 
                    img={img} 
                    title={title}
                    brief={brief}
                    >
                </Cover>
            }

            <div className="grid md:grid-cols-2 md:mt-10 md:gap-10">

                {
                    items.map(item => 
                        <MenuItems 
                            key={item._id} 
                            item={item}>
                        </MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;