import React from 'react';
import './Topnavbar.css';
import { Link } from 'react-router-dom';

function Topnavbar() {
return (
<div className='navbar'>
    <ul>
        <li className='logo'>Roadsters</li>
        <li>Trending</li>
        <li>Product</li>
        <li>About</li>
    </ul>
</div>
)
}

export default Topnavbar