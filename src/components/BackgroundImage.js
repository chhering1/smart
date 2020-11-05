import React, { useContext} from 'react';
import { css } from 'emotion'
import circle from '../img/Circles.png'
import { dataContext } from '../contexts/DataContext';


const BackgroundImage = (  ) => {
    
const { isRotated } = useContext(dataContext)

    const img = css`
    margin-top: -110px;
    margin-left: -50px;
    transform: rotate(${isRotated ? '-50deg' : '0deg' });
    transition : transform 1s;
    `;

    return (  
        <>
             <img  className={img} src={circle} alt=""/>
        </>
    );
}
 
export default BackgroundImage;