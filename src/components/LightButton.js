import React from 'react';
import { css } from 'emotion';

const LightButton = ({logo, theme,bgColor,textClr}) => {
    const btn = css`
    width:124px;
    color: ${textClr ? textClr : 'white'};
height:45px;
border:none;
/* margin-right:20px; */
border-radius:15px;
font-weight:bold;
display:flex;
/* margin-left:20px; */
box-sizing:border-box;
/* overflow:hidden; */
font-size:13px;
background-color: ${bgColor ? bgColor : 'white'};
justify-content:space-around;

.logo {
    margin-top:12px;
}
    `;
    return (  
        <button className={btn}>
<img src={logo} alt="" className="logo"/>
    <p className="theme">{theme}</p>
        </button>
    );
}
 
export default LightButton;