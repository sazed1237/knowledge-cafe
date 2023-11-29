import React from 'react';
import './Header.css'
import profileImg from '../../assets/images/365942987_317057107556992_4632049920754297304_n-modified.png'
const Header = () => {
    return (
        <div className='header'>
            <h2>Knowledge Cafe</h2>
            <img src={profileImg} alt="" />
        </div>
        
    );
};

export default Header;