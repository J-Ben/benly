import React, { useState } from 'react';
import ListItem from "@material-ui/core/List";
import { Link} from 'react-scroll'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Accueil',
        link: 'home',
    },
    {
        id: 2,
        title: 'A propos',
        link: 'about',
    },
    {
        id: 3,
        title: 'Expériences',
        link: 'experience',
    }, 
    {
        id: 5,
        title: 'Contact',
        link: 'contact',
    }, 


]


const MobileMenu = () => {

    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className='mobail_menu'>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem key={mn}>
                            <Link
                                to={item.link} spy={true} smooth={true}  duration={500} onClick={ClickHandler}>{item.title}</Link>
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;