import React from 'react';
import "./basics/style.css";
import Menu from './menuAPI';
import MenuCard from './MenuCard';
import Navbar from './navbar';

const uniqueList = [
    ...new Set(Menu.map((curElem) => {
    return curElem.category;
})
)
]

// hooks should be the first line in the function
const Restaurant = () => {
    const [menuData, setMenuData] = React.useState(Menu);
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
          <Navbar filterItem={filterItem} />
          <MenuCard menuData={menuData} />
        </>
    )
}
export default Restaurant
