import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.gericht} alt="Gericht"/>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#pages">Pages</a></li>
                <li className="p__opensans"><a href="#contact">Contact Us</a></li>
                <li className="p__opensans"><a href="#blog">Blog</a></li>
                <li className="p__opensans"><a href="#landing">Landing</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans"> Log In / Register</a>
                <div />
                <a href="/" className="p__opensans">Book Table</a>
            </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu fontSize={20} className="overlay__open" color="white" onClick={()=> setToggleMenu(true)}/>
                {toggleMenu && <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                    <MdOutlineRestaurantMenu fontSize={20} className="overlay__close" color="white" onClick={()=> setToggleMenu(false)}/>
                    <ul className="app__navbar-smallscreen_links">
                        <li className="p__opensans"><a href="#home">Home</a></li>
                        <li className="p__opensans"><a href="#pages">Pages</a></li>
                        <li className="p__opensans"><a href="#contact">Contact Us</a></li>
                        <li className="p__opensans"><a href="#blog">Blog</a></li>
                        <li className="p__opensans"><a href="#landing">Landing</a></li>
                    </ul>
                </div>}
            </div>
        </div>
    );
}

export default Navbar;
