import './homepage.css';
import { BsSearch } from 'react-icons/bs';
import React, { useState } from 'react';
import Topnavbar from '../components/Topnavbar/Topnavbar';
import Modal from '../components/Login/Modal'
import ItemCard from '../components/ItemCard/ItemCard';

import Homeimg from '../assets/homeimage.png';

function Home() {

    const [isOpen, setOpen] = useState(false) // to open/close the login modal


    return (
        <div className="home" >
            <div className='lt-rt'>
            <div className="lt-box" >
                <Topnavbar />
            <div className='sidebox'>
                <div className='sidebox-column'>
                <h1>WELCOME TO ROADSTERS</h1>
                <p className='heroPara'>To sustainably make the Pleasure and Benefits of Sport accessible to the Many</p>
                <a id='homeExplore'>EXPLORE</a>
                </div>
            <img src={Homeimg} className='homeimg'/>
            </div>
            </div>
           
            <div className='rt-box' >
                <div className='small-box'>
                    <div className='search'>
                        <input type="text" placeholder="Search.." /> <h3 className='search-icon'><BsSearch /></h3>
                    </div>

                    <button id='loginButtonOnHomepage' onClick={() => setOpen(true)}>Log In</button>
                </div>
                
            </div>
            </div>
            <div className="itemCardContainer">
            <p>TRENDING</p>
            <ItemCard/>
            </div>
        </div>);
}

export default Home;