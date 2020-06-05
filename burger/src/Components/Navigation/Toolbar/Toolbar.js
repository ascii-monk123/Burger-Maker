import React from 'react';
import Classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigation Items/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
  <header className={Classes.Toolbar}>
    <DrawerToggle click={props.clicked}>MENU</DrawerToggle>
    <div className={Classes.Logo}>
      <Logo />
    </div>
    <div className={Classes.hide}>
      <NavigationItems />
    </div>
  </header>
);

export default Toolbar;
