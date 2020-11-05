import React, {useContext} from 'react';
import { css } from 'emotion';
import {Link} from '@reach/router';
import Lamp from './Lamp';
import leftarrow from '../img/leftarrow.svg';
import colors from './Colors';
import { dataContext } from "../contexts/DataContext";


const LampHeader = ({room, lights}) => {
const {color} = useContext(dataContext)

    const lamp = css`
    /* border:1px solid red; */
    display:flex;
    height:185px;
    padding:0px 10px;
    justify-content:space-between;
    `;
    const roombox = css`
    width:90px;
    /* border:1px solid red; */
    margin-left:10px;
    padding-top:25px;
    /* margin-top:-50px; */
    .room {
        font-size:30px;
        font-weight:bold;
        color:white;
    }
    .lights {
        margin-top:-10px;
        font-size:19px;
        font-weight:bold;
        color : ${colors.lightColor};
    }
    
    `;
    const arrow = css`
    position: absolute;
    /* border:1px solid red; */
    margin-top:55px;
    margin-left:-5px;
    `;
    return ( 
        <div className={lamp}>
                        <Link to="/" className={arrow} >
               <img src={leftarrow} alt=""/>
           </Link>
           <div className={roombox}>
                <h1 className="room">{room}</h1>
                {/* <h1 className="animate__animated animate__bounce">An animated element</h1> */}
                <p className="lights animate__animated animate__fadeInDown animate__delay-1s" >{lights}</p>
            </div>
            <Lamp bgColor={color}/>
           

        </div>
     );
}
 
export default LampHeader;