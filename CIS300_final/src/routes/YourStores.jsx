import "./YourStores.css"
import {NavLink} from "react-router-dom";

const YourStores = () => {
    return (
        <main>
            <div className={"internalWrapper"}>
                <h1>Your Recommendations</h1>
                    <section id={"shopImages"} className={"shopImages"}>
                        <div className={"cell"}>
                            <img src={"shopImage1.jpg"} alt={"Luana's Coffee Yard"}/>
                            <h4>Luana's Coffee Yard - 1.4 miles</h4>
                            <p>modern | alcohol | enjoy with company</p>
                            <NavLink to={"/recommendation1"}>Learn More</NavLink>
                        </div>
                        <div className={"cell"}>
                            <img src={"shopImage2.jpg"} alt={"Light Heart Coffee Shop"}/>
                            <h4>Light Heart Coffee - 2.3 miles</h4>
                            <p>cozy | quiet | romantic</p>
                            <NavLink to={"/recommendation2"}>Learn More</NavLink>
                        </div>
                        <div className={"cell"}>
                            <img src={"shopImage3.jpg"} alt={"Press Coffee Shop"}/>
                            <h4>Press Coffee - 4.5 miles</h4>
                            <p>industrial | extra-clean | productive</p>
                            <NavLink to={"/recommendation3"}>Learn More</NavLink>
                        </div>
                </section>
            </div>
        </main>
    )
}

export default YourStores;