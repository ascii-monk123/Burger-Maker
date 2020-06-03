import React from 'react';
import Classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigation Items/NavigationItems';

const Toolbar = (props) => (
  <header className={Classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <NavigationItems />
  </header>
);

export default Toolbar;
