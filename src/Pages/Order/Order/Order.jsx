import { Helmet } from "react-helmet-async";
import orderImg  from "../../../assets/shop/orderCover.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [ tabIndex, setTabIndex ] = useState(initialIndex)
    const [ menu ] = useMenu();
    

    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order</title>
            </Helmet>
            <Cover
                img={orderImg} title={"Orderd Food"}>
            </Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soup</Tab>
                <Tab>Desert</Tab>
                <Tab>Drinks</Tab>
            </TabList>

            <TabPanel>
                <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={desserts}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={drinks}></OrderTab>
            </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;