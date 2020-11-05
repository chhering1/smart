import { useContext } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import { css } from ''emotion';
import { dataContext } from "../contexts/DataContext";


const ColorButton = ({bgColor,plus}) => {

    const {setColor}= useContext(dataContext)

    const btn = css`
    height:29px;
    width:29px;
    border-radius:60%;
    margin-left:-8px;
    border:none;
    background-color : ${bgColor ? bgColor : 'white'};
   
    `;

const match = () => (
setColor(bgColor)
    
)
    return ( 
        <button css={btn} onClick={() => match()} >
            <span>{plus}</span>
        </button>
     );
}
 
export default ColorButton;