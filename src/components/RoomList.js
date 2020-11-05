import React, { useContext, useEffect} from 'react';
import { css } from 'emotion'
import Home from './Home';
import { dataContext } from "../contexts/DataContext";
import colors from './Colors';
import Header from './Header';
import user from "../img/user.png"
import Navigation from './Navigation';


const RoomList = () => {
    const   {data}  = useContext(dataContext)
    const {setIsRotated} = useContext(dataContext);
    // console.log(setRotate)

   useEffect(() => {
       setIsRotated(false)
   }, [ setIsRotated]);
   
    const roomlist = css`
    /* border:5px solid white; */
    height:805px;
    `;
    const section = css`
    height:656px;
    /* border:1px solid red; */
    background-color : ${colors.primary};
    border-radius:50px 50px 0px 0px;
    box-sizing:border-box;
    .rooms {
        /* border:1px solid red; */
        padding:10px;
        padding-left:20px;
        padding-top:15px;
        color: ${colors.darkFont}
    }
    `;
    const grid =css`
    display:grid;
    /* border:1px solid blue; */
    grid-template-columns:1fr 1fr;
    gap:15px;
    margin-left:-40px;
    margin-bottom:25px;
    li {
        list-style-type: none;
        margin:0;
    }
    `;
    
    return ( 
        <div className={roomlist}>
<Header title="Control Panel"  user={user}/>

<section className={section}>
<h2 className="rooms">All Rooms</h2>

<ul className={grid}> 
{ data &&  
data.all.map( (rooms) => (
    <li key={rooms.id}>
    <Home  id={rooms.id} rooms={rooms.room} logo={rooms.logo} lights={rooms.lights}
    />
</li>
))}
</ul>
<Navigation />
</section>
</div>
     );
}
 
export default RoomList;