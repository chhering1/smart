import  {useContext, useState, useEffect} from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import { css } from 'emotion';
import colors from './Colors';
import Navigation from './Navigation';
import bulb from '../img/solution.png'
import yellowbulb from '../img/solution.svg'
import './slider.css'
import ThemeButton from './ThemeButton';
import bed from '../img/bed (1).svg';
import furniture from '../img/furniture.png';
import darkbulb from '../img/surface1.svg'
import LightButton from './LightButton';
import { dataContext } from "../contexts/DataContext";
import LampHeader from './LampHeader'
import ColorButton from './ColorButton';


const OtherRooms = (props ) =>{
const [value, setValue ] = useState(0);
const   {data}  = useContext(dataContext);
const { setOpacity } = useContext(dataContext);
const {setIsRotated} = useContext(dataContext);
   
   useEffect(() => {
       setIsRotated(true)
   }, [ setIsRotated]);

 useEffect(() => {
     setValue('100')
 }, []);

     const current =   data &&  data.all.find(elm => elm.id === parseInt(props.room))

     const match = (e) => {
         setValue(e.target.value)
         setOpacity(e.target.value)
     }
   
    const otherRoomsContainer = css`
    /* border:1px solid white;  */
    
    `;
const style = css`
 background-color : ${colors.primary};
border-radius:50px 50px 0px 0px;
box-sizing:border-box;
padding:20px;
height:480px;
color:${colors.darkFont};
margin-bottom:0px;
overflow:hidden;
/* border:1px solid red; */

`;

const lightbox = css`
 display:flex;
 justify-content:space-between;
 width:395px;
overflow:hidden;
/* padding-right: 10px; */
margin-left:15px;
margin-top:20px;
margin-bottom:15px;
/* border:1px solid red; */

`;

const bulbs = css`
display:flex;
justify-content:space-between;
`;

const themebox = css`

display:grid;
grid-template-columns: 1fr 1fr;
row-gap:20px;
margin-bottom:30px;
padding-right:10px;
width:265px;
/* margin-left:-50px; */
animation: move 1s 1s ease-out forwards;
@keyframes move {
    to{width:375px;}
}
`;

const colorBox = css`
      width:164px;
      /* border:1px solid red; */
      display: flex;
      justify-content:space-between;
     animation : flyt 1s 1s ease-out forwards ;
    
@keyframes flyt {
    to {width:100%}
}
`;

    return ( 
        <div css={otherRoomsContainer} >
           
           { current && 
            <LampHeader  room={current.room} lights={current.lights} />
           }

<div css={lightbox} className="animate__animated animate__fadeInRight animate__delay-1s">
    <LightButton  theme="Main Light" logo={darkbulb} textClr="#002D67"/>
    <LightButton theme="Desk Light" logo={furniture} bgColor="#093B7B"/>
    <LightButton  theme="Bed Light" logo={bed} textClr="#002D67"/>
</div>

        <section css={style} >

            <h3>Intensity</h3>
            <section css={bulbs}>
            <img src={bulb} alt=""/> 
            <input  type= "range" onChange={(e) => match(e)} className="slider" min="0" max="100" value={value}/>
            <img src={yellowbulb} alt=""/>
            </section>
            
            <h3>Colors</h3>
            <section css={colorBox} >
                {data && 
                data.colors.map( (colorbtn) => (
                    <div key={colorbtn.id}>
                        <ColorButton  bgColor={colorbtn.bgColor} plus={colorbtn.plus}/>
                    </div>
                ))
                }
            </section>

            <h3>Scenes</h3>
           
            <section css={themebox}>
                { data &&
                data.scenes.map ( (theme) => (
                    <div key ={theme.id}>
                    <ThemeButton theme= {theme.themes} firstclr={theme.firstclr} secondclr={theme.secondclr}/>
                    </div> 
                ) )
                 }
            </section> 
            
        </section>
        <Navigation />

        </div>
     );
}
 
export default OtherRooms;