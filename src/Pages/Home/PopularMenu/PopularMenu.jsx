
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [ menu ] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [ menu, setMenu ] = useState([])

    // useEffect( () => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // }, [])
    return (
        <section className="md:my-16">
            <SectionTitle
                subHeading={'Popular items'}
                heading={'From our menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => 
                        <MenuItems 
                            key={item._id} 
                            item={item}>
                        </MenuItems>)
                }
            </div>
            <div className="flex items-center justify-center md:mt-5">
                <button className="btn btn-outline text-amber-500 border-0 border-b-2">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;