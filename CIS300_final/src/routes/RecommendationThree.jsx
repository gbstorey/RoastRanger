import {NavLink} from "react-router-dom";
import "./RecommendationOne.css"
import {Helmet} from "react-helmet";

const RecommendationThree = () => {
    return (
        <main>
            <Helmet>
                <title>Roast Ranger | Press Coffee</title>
                <meta name="description" content={"Explore the prized attributes of Press Coffee."}/>
            </Helmet>
            <section id={"storeHero"} className={"storeHero"}>
                <div id={"storeHeroText"} className={"storeHeroText"}>
                    <h1>Press Coffee</h1>
                    <p>Press Coffee has become an Arizona staple among specialty coffee enthusiasts while earning national recognition for their coffees. Although Press has evolved over the years, they have stayed true to their beginnings: sourcing the best possible product, using only the best equipment; and most importantly, finding team members that share the Press passion for amazing coffee. Remaining quality driven and community focused, Press Coffee not only supports Arizona charities but the coffee farmers around the world supplying our passion.</p>
                    <div id={"buttonRow"} className={"buttonRow"}>
                        <NavLink to={"https://presscoffee.com/"}>Visit their Website</NavLink>
                        <NavLink to={"https://cdn.shopify.com/s/files/1/0247/6146/6916/files/LiteMenu_7-5-21.pdf"}>View their Menu</NavLink>
                        <div id={"iconRow"} className={"iconRow"}>
                            <img title="Wifi Accessible" src={"../wifi.svg"} alt={"Wifi Attribute Symbol"} className={"attributeSymbol"}/>
                            <img title="Great Place to Study" src={"../pencil.svg"} alt={"Study Spot Attribute Symbol"} className={"attributeSymbol"}/>
                            <img title="In-House Roaster" src={"../roaster.svg"} alt={"Roaster Attribute Symbol"} className={"attributeSymbol"}/>
                        </div>
                    </div>
                </div>
                <div className={"shopHeroImage"}>
                    <img src={"./press/press1.webp"} alt={"Image of Store Interior"}/>
                </div>
            </section>
            <section id={"storeInfo"} className={"storeInfo"}>
                <div className={"infoContainer"}>
                    <article className={"recommendation"}>
                        <h2>Lexi Hammonds</h2>
                        <h4 className={"postTime"}>1y ago</h4>
                        <p>Traveled from NM and came to Press Coffee on the search for the best chai latte. ☕️ My fiancé and I were absolutely impressed by how freaking perfect it was! The iced chai was so creamy, and it had the perfect amount of spiciness! 👍🏼 Hands down the best chai latte I have ever had, we will be going here every time we are back!</p>
                    </article>
                    <article className={"recommendation"}>
                        <h2>Jena R</h2>
                        <h4 className={"postTime"}>3y ago</h4>
                        <p>This is an excellent coffee shop where you can enjoy a craft coffee and share a great conversation. Sit outside listening to the fountain, or inside with the background whir of the grinder. Craft coffee. Nicely done. Friendly people. Beautiful environment. A must!</p>
                    </article>
                    <article className={"recommendation"}>
                        <h2>Desiree Ramsey</h2>
                        <h4 className={"postTime"}>5y ago</h4>
                        <p>Came in 25 min before closing and the baristas were very friendly & helpful with drink suggestions, and answering our questions. They were so patient while we decided what drink we wanted even though it was reaching closing time and even let us sample the drinks on tap. Didn't feel rushed and made it a great experience for a last min stop. Great coffee and will definitely be back to get the kombucha!</p>
                    </article>
                </div>
            </section>
            <section className={"imagesSection"}>
                <section id={"shopImages"} className={"shopImages"}>
                    <div className={"storeCell"}>
                        <img src={"./press/press2.webp"} alt={"Photo of Exterior"}/>
                    </div>
                    <div className={"storeCell"}>
                        <img src={"./press/press3.webp"} alt={"Photo of Press Chemex Pourover"}/>
                    </div>
                    <div className={"storeCell"}>
                        <img src={"./press/press4.webp"} alt={"Photo of Press Latte Art"}/>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default RecommendationThree