import React from 'react';
import { css } from 'emotion';
import colors from './Colors';

const Header = ({ title, lights, user}) => {
    
    const head = css`
    /* border:1px solid red; */
    display:flex;
    height:110px;
    justify-content:space-between;

    /* margin-top:-30px; */
    background:none;
    .arrow {
        margin-left:3px;
    }
    .title {
        padding-left:20px;
        width:106px;
        color:white;
        font-size:30px;
    }
    .user {
        margin-top:20px;
        margin-right:10px;
        height:73px;
        width:73px;
    }
    `;
    const titleBox = css`
    /* border:1px solid red; */
    .lights {
        color:${colors.lightColor};
        margin-top:-10px;
        margin-left:15px;
        font-size:19px;
        font-weight:bold;
    }
    `;
    
    return ( 
        <header className={head}>
            <div className={titleBox}>
             <h1 className="title">{title}</h1>
              <p className="lights">{lights}</p>
            </div>
        <img  className="user" src={user} alt=""/>
        </header>
    )
        };
    
 
export default Header;