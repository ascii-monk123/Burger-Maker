import React from 'react';
import burgerLogo from '../../assets/images/original.png';
import Classes from './Logo.module.css';

const Logo = (props) => (
  <div className={Classes.Logo}>
    <img src={burgerLogo} alt="Yumm Burger" />
  </div>
);

export default Logo;
