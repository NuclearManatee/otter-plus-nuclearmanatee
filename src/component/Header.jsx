import React, {useState} from "react";
import '../styles/Header.css'

export default function Header(props){

    const {menuOptions} = props;

    const [toggleMenu, setToggleMenu] = useState(false);

    function toggleActive(){
        setToggleMenu( (state) => !state);
        document.getElementById('nav-mobile').classList.toggle('active');
    }

    return(<>
    
        <header>
            <div className="logo">
                <div className="icon-wrapper" onClick={toggleActive}><span className="material-icons">{toggleMenu ? "menu_open" : "menu"}</span></div>
            </div>
            
            
            <nav className="nav-desktop">
                { menuOptions.map((item,index) => (
                    <span key={index}><a  href={item.link}>{item.name}</a></span> 
                ))}
            </nav>

            <nav className="nav-mobile" id="nav-mobile">
                { menuOptions.map((item,index) => (
                    <span key={index}><a  href={item.link}>{item.name}</a></span> 
                ))}
            </nav>

        </header>
    
    </>)
}