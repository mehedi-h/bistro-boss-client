import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
// menu items image
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {

    const [ menu ] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    console.log(offered);

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover 
                img={menuImg} 
                title={"Our Menu"}
                brief={"Would you like to try a dish?"}
                >
            </Cover>
            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"today's offer"}>
            </SectionTitle>

            {/* Offered items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* Desserts items */}
            <MenuCategory 
                img={dessertImg}
                items={desserts}
                title="Dessarts"
                brief="Our Deserts Items"
                >
            </MenuCategory>

            {/* Pizza items */}
            <MenuCategory 
                img={pizzaImg}
                items={pizza}
                title="Pizza"
                brief="Our Pizza Items"
                >
            </MenuCategory>

            {/* Salads items */}
            <MenuCategory 
                img={saladImg}
                items={salad}
                title="Salads"
                brief="Our Salads Items"
                >
            </MenuCategory>

            {/* Soups items */}
            <MenuCategory 
                img={soupImg}
                items={soup}
                title="Soup"
                brief="Our Soups Items"
                >
            </MenuCategory>

        </div>
    );
};

export default Menu;