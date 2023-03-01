import "./YourStores.css"
import {NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";

const YourStores = () => {
    return (
        <main>
            <Helmet>
                <title>Roast Ranger | Your Stores</title>
                <meta name="description" content={"Explore new coffee shops curated just for you."}/>
            </Helmet>
            <div className={"internalWrapper"}>
                <h1>Your Recommendations</h1>
                    <section id={"shopImages"} className={"shopImages"}>
                        <div className={"cell"}>
                            <img src={"./infusion/infusion4.jpg"} alt={"Infusion Coffee Shop"}/>
                            <h4>Infusion Coffee & Tea - 1.4 miles</h4>
                            <div id={"buttonRow"} className={"buttonRow"}>
                                <NavLink to={"https://www.infusioncoffeetea.com/"}>Visit their Website</NavLink>
                            </div>
                            <div id={"buttonRow"} className={"buttonRow"}>
                                <NavLink to={"https://www.infusioncoffeetea.com/menu"}>View their Menu</NavLink>
                            </div>
                            <div id={"buttonRow"} className={"buttonRow"}>
                                <NavLink to={"/infusion"}>Learn More</NavLink>
                            </div>
                        </div>
                        <div className={"cell"}>
                            <img src={"shopImage2.jpg"} alt={"Light Heart Coffee Shop"}/>
                            <h4>Light Heart Coffee - 2.3 miles</h4>
                            <div id={"buttonRow"} className={"buttonRow"}>
                                <NavLink to={"https://lightheartcoffee.com/"}>Visit their Website</NavLink>
                            </div>
                            <div id={"buttonRow"} className={"buttonRow"}>
                                <NavLink to={"https://lightheartcoffee.com/index.php/menu/"}>View their Menu</NavLink>
                            </div>
                            <div id={"buttonRow"} className={"buttonRow"}>
                                <NavLink to={"/recommendation2"}>Learn More</NavLink>
                            </div>
                        </div>
                        <div className={"cell"}>
                            <img src={"shopImage3.jpg"} alt={"Press Coffee Shop"}/>
                            <h4>Press Coffee - 4.5 miles</h4>
                            <div id={"buttonRow"} className={"buttonRow"}>
                                <NavLink to={"https://presscoffee.com/"}>Visit their Website</NavLink>
                            </div>
                            <div id={"buttonRow"} className={"buttonRow"}>
                                <NavLink to={"https://cdn.shopify.com/s/files/1/0247/6146/6916/files/LiteMenu_7-5-21.pdf"}>View their Menu</NavLink>
                            </div>
                            <div id={"buttonRow"} className={"buttonRow"}>
                                <NavLink to={"/recommendation3"}>Learn More</NavLink>
                            </div>
                        </div>
                </section>
                <section>
                    <table>
                        <caption>How Close Did We Get?</caption>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Distance</th>
                                <th>Type</th>
                                <th>Attribute</th>
                                <th>Theme</th>
                                <th>Menu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Infusion</td>
                                <td>5/5</td>
                                <td>4/5</td>
                                <td>3/5</td>
                                <td>4/5</td>
                                <td>4/5</td>
                            </tr>
                            <tr>
                                <td>Light Heart</td>
                                <td>4/5</td>
                                <td>3/5</td>
                                <td>4/5</td>
                                <td>3/5</td>
                                <td>5/5</td>
                            </tr>
                            <tr>
                                <td>Press</td>
                                <td>3/5</td>
                                <td>3/5</td>
                                <td>4/5</td>
                                <td>5/5</td>
                                <td>4/5</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    )
}

export default YourStores;