import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigation Items/NavigationItems';
import Classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
  return (
    <div className={Classes.SideDrawer}>
      <div className={Classes.Logo}>
      <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
