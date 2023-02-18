import {NavLink} from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/preferences"}>Preferences</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact Us</NavLink>
                </li>
            </ul>
            <div className={"footerImgWrapper"}>
                <img src={"../coffee.svg"} alt={"Roast Ranger logo"} className={"logo"}/>
            </div>
            <ul className={"footerEmail"}>
                <li>
                    <NavLink to={"mailto:roastranger@gmail.com"}>Email: roastranger@gmail.com</NavLink>
                </li>
                <li>
                    © 2023 Roast Ranger USA, Inc. All rights reserved.
                </li>
            </ul>
        </footer>
    )
}

export default Footer;