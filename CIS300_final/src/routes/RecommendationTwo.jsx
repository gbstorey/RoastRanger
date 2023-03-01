import {NavLink} from "react-router-dom";
import "./RecommendationOne.css"
import {Helmet} from "react-helmet";

const RecommendationTwo = () => {
    return (
        <main>
            <Helmet>
                <title>Roast Ranger | Light Heart Coffee</title>
                <meta name="description" content={"Explore the prized attributes of Light Heart Coffee."}/>
            </Helmet>
            <section id={"storeHero"} className={"storeHero"}>
                <div id={"storeHeroText"} className={"storeHeroText"}>
                    <h1>Light Heart Coffee</h1>
                    <p>Light Heart Coffee is the new sensation on the local coffee scene. Locally owned and operated, it’s been winning over customers’ hearts that have fallen in love with their excellent service, unbeatable drinks, and photogenic interior design. This is a bright, welcoming space where we hope that everyone who walks in our doors feels like a friend. All we want is to share our love for yummy, fun drinks with the world. We cherish lots of light, groovy designs, warm colors, and of course, amazing coffee.</p>
                    <div id={"buttonRow"} className={"buttonRow"}>
                        <NavLink to={"https://lightheartcoffee.com/"}>Visit their Website</NavLink>
                        <NavLink to={"https://lightheartcoffee.com/index.php/menu/"}>View their Menu</NavLink>
                        <div id={"iconRow"} className={"iconRow"}>
                            <img title="Wifi Accessible" src={"../wifi.svg"} alt={"Wifi Attribute Symbol"} className={"attributeSymbol"}/>
                            <img title="Romantic" src={"../heart.svg"} alt={"Romantic Attribute Symbol"} className={"attributeSymbol"}/>
                            <img title="Great For Photos" src={"../camera.svg"} alt={"Photogenic Attribute Symbol"} className={"attributeSymbol"}/>
                        </div>
                    </div>
                </div>
                <div className={"shopHeroImage"}>
                    <img src={"./light_heart/lightheart1.jpg"} alt={"Image of Store Interior"}/>
                </div>
            </section>
            <section id={"storeInfo"} className={"storeInfo"}>
                <div className={"infoContainer"}>
                    <article className={"recommendation"}>
                        <h2>Zach Lyman</h2>
                        <h4 className={"postTime"}>6mon ago</h4>
                        <p>The most aesthetic coffee shop!! The atmosphere works for a coffee date with your girls, a quick business meeting, or to enjoy some quiet time with yourself! No other place compares. Make sure to try the secret menu!!! The people who run this place really know what their doing and are so kind!!!!</p>
                    </article>
                    <article className={"recommendation"}>
                        <h2>Jessica Cons</h2>
                        <h4 className={"postTime"}>9mon ago</h4>
                        <p>Such a pretty little coffee shop. It was easy to miss in the parking lot partly because there were painters taping off areas. But truly is adorable and my drink was delicious. I got the Desert Honey Latte which is honey, macadamia nut and cardamom. Very tasty almost reminded me of Honey Nut Cheerios. Very picturesque with limited seating. A must try if you're in the area! Oh and they use Peixoto coffee (local based in Chandler).</p>
                    </article>
                    <article className={"recommendation"}>
                        <h2>Esther Bezanson</h2>
                        <h4 className={"postTime"}>10mon ago</h4>
                        <p>I can’t recommend this coffee shop enough. The space is very bright and welcoming. The owners are so sweet and friendly. But my 5 star review is really for the drinks. The coffee they serve is a very tasty, with real notes, and no burnt taste. You can tell they have been properly trained. They have unique creations and syrup combos. My favourite is the grapefruit espresso tonic. Highly recommend.</p>
                    </article>
                </div>
            </section>
            <section className={"lightHeartImages"}>
                <section id={"shopImages"} className={"shopImages"}>
                    <div className={"storeCell"}>
                        <img src={"./light_heart/lightheart2.jpg"} alt={"Photo of Exterior"}/>
                    </div>
                    <div className={"storeCell"}>
                        <img src={"./light_heart/lightheart3.jpg"} alt={"Photo of Interior"}/>
                    </div>
                    <div className={"storeCell"}>
                        <img src={"./light_heart/lightheart4.jpg"} alt={"Photo of Honey Latte"}/>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default RecommendationTwo