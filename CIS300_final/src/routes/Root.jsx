import Header from "../sections/Header.jsx";
import {Outlet} from "react-router-dom";
import "./Root.css"
import Footer from "../sections/Footer.jsx";

const Root = () => {
    return(
            <div id="wrapper" className="wrapper">
                <Header/>
                <Outlet />
                <Footer />
            </div>
    )
}

export default Root