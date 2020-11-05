import React from 'react';
import { css } from 'emotion';
import colors from './Colors'
import { Link } from '@reach/router'; 
import './slider.css'
// import { dataContext } from "../contexts/DataContext";

const Home = ( {logo, rooms, lights, id }) => {

const style = css`
background-color:white;
box-sizing:border-box;
padding:12px;
border-radius:30px;
position: relative;
z-index:999;
.room {
   font-size: 19px;
    color: ${colors.veryDarkFont}
}
        
.lights {
    font-size:13px;
    font-weight:bold;
    color : ${colors.orangeFont}
}
    `;
const linkstyle = css`
text-decoration:none;
    `;
    

    return (  
        <div className={style}>
    <Link to={"/"+id} className={linkstyle}>
    <img src={logo} alt=""/>
    <h3 className="room"> {rooms}</h3>
    <p className="lights">{lights}</p> 
    </Link>
    </div>
     );
}
 
export default Home;