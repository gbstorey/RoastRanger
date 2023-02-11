import {NavLink} from "react-router-dom";
import "./Header.css"


const Header = () => {
    return (
        <header>
            <div className={"imgWrapper"}>
                <img src={"../coffee.svg"} alt={"Roast Ranger logo"} className={"logo"}/>
            </div>
            <NavLink to={"/"}><h1 className={"companyName"}>RoastRanger</h1></NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Your Stores</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/preferences"}>Preferences</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;