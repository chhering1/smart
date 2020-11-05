import React  from 'react';
import { Router } from '@reach/router'
import { css } from 'emotion';
import colors from './Colors';
import RoomList from './RoomList';
import OtherRooms from './OtherRooms';
import BackgroundImage from './BackgroundImage';
// import { dataContext } from '../contexts/DataContext';

const Container = ( ) => {
 
    // console.log(rotate)
    const style = css`
    margin:auto;
    /* border:1px solid lightgrey; */
    box-sizing:border-box;
    background-color:${colors.secondary};
    height:812px;

    .circle {
    margin-top: -70px;
    margin-left:-50px;
    }

    .move {
        transform: rotate(-50deg);
    }
    `;
    const elm = css`
    /* border:2px solid red; */
    margin-top:-800px;
    overflow:hidden;
    `;
    return ( 
        <>
        <main className={style}>
            <BackgroundImage />
            </main>
            <div className={elm}>
        <Router>
             <RoomList path="/" />
             <OtherRooms path="/:room"  />
         </Router>
         </div>
         </>
     );
}
 
export default Container;
