import React, {useContext } from 'react';
import { css } from 'emotion';
import colors from './Colors';
import Navigation from './Navigation';
import bulb from '../img/solution.png'
import yellowbulb from '../img/solution.svg'
import './rangeBar.css'
import ThemeButton from './ThemeButton';
import bed from '../img/bed (1).svg';
import furniture from '../img/furniture.png';
import darkbulb from '../img/surface1.svg'
import LightButton from './LightButton';
import { dataContext } from "../contexts/DataContext";
import Lamp from './Lamp'

const OtherRooms = (props ) =>{

    const   {data}  = useContext(dataContext)
   
     const current =   data &&  data.all.find(elm => elm.id === parseInt(props.room))
   
    const otherRoomsContainer = css`
    /* border:1px solid yellow;  */
    `;
const style = css`
 background-color : ${colors.primary};
border-radius:50px 50px 0px 0px;
box-sizing:border-box;
padding:20px;
color:${colors.darkFont};
margin-bottom:0px;
.bulbs {
    display:flex;
    justify-content:space-between;
}
`;

const themebox = css`
/* border:1px solid red; */
display:grid;
grid-template-columns: 1fr 1fr;
gap:10px;
margin-bottom:50px;
`;

const lightbox = css`
display:flex;
overflow:hidden;
margin-left:15px;
margin-top:20px;
margin-bottom:25px;
`;


    return ( 
        <div className={otherRoomsContainer}>
           
           { current && 
            <Lamp  room={current.room} lights={current.lights} />
           }
         
<div className={lightbox}>
    <LightButton  theme="Main Light" logo={darkbulb} textClr="#002D67"/>
    <LightButton theme="Desk Light" logo={furniture} bgColor="#002D67"/>
    <LightButton theme="Bed Light" logo={bed} textClr="#002D67"/>
</div>
        <section className={style}>

        <h3>Intensity</h3>
            <section className="bulbs">
            <img src={bulb} alt=""/> 
            <input  type= "range" readOnly className="rangebar" min="0" max="100" value="100"/>
            <img src={yellowbulb} alt=""/>
            </section>
            
            <h3>Colors</h3>
            <section className="colorBox">
               <button className="colorpink"></button>
               <button className="colorgreen"></button>
               <button className="colorblue"></button>
               <button className="colorpurple"></button>
               <button className="colordarkpink"></button>
               <button className="coloryellow"></button>
               <button className="plus">+</button> 
            </section>

            <h3>Scenes</h3>
           
            <section className={themebox}>
                { data &&
                data.scenes.map ( (theme) => (
                    <>
                    <div key ={theme.id}>
                    <ThemeButton theme= {theme.themes} firstclr={theme.firstclr} secondclr={theme.secondclr}/>
                    </div>
                    </>
                ) )
                 }
            </section> 
            
        </section>
        <Navigation />

        </div>
     );
}
 
export default OtherRooms;