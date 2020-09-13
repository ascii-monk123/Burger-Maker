import React from "react";
import Classes from "./NavigationItems.module.css";
import NavigationItem from "../Navigation Items/NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className={Classes.NavigationItems}>
    <NavigationItem link={"/"} exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link={"/orders"}>Checkout</NavigationItem>
    <NavigationItem link={"/auth"}>Authenticate</NavigationItem>
  </ul>
);

export default NavigationItems;
