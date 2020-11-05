import React from 'react';
import { css } from 'emotion';
import whitebulb from '../img/surface1.png';

const ThemeButton = ({ theme,  firstclr, secondclr}) => {
    const btn = css`
    height: 55px;
    width:150px;
    color: white;
    border:none;
    box-sizing:border-box;
    border-radius:10px;
    display:flex;
    padding:10px 20px;
    justify-content:space-around;
    background:linear-gradient(to right, ${firstclr}, ${secondclr});

    
    
    .theme {
        font-size:13px;
        font-weight:bold;
        /* border:1px solid black; */
    }
    .logo {
        margin-top:10px;
    }
    `;
    return (
        <button className={btn}>
<img src={whitebulb} alt="" className="logo"/>
    <p className="theme">{theme}</p>
            </button>
      );
}
 
export default ThemeButton;