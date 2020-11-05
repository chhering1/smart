import React from 'react';
import { css } from 'emotion';
import homeicon from '../img/Iconhome.png';
import settingsicon from '../img/Iconfeather.png';
import bulb from '../img/bulb.png';

const Navigation = () => {
    const navbar = css`
    height:67px;
    padding:20px;
    box-shadow: 0 -5px 5px -5px #3333;
    display:flex;
    justify-content:space-around;
    box-sizing:border-box;
    background-color:white;
    margin-top:-10px;
    margin-bottom:10px;
    `;
    return ( 
        <nav className={navbar}>
<img src={bulb} alt=""/>
<img src={homeicon} alt=""/>
<img src={settingsicon} alt=""/>
</nav>
     );
}
 
export default Navigation;