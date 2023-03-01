import {NavLink} from "react-router-dom";
import "./RecommendationOne.css"
import {Helmet} from "react-helmet";

const RecommendationOne = () => {
    return (
        <main>
            <Helmet>
                <title>Roast Ranger | Infusion Coffee and Tea</title>
                <meta name="description" content={"Explore the prized attributes of Infusion Coffee and Tea."}/>
            </Helmet>
            <section id={"storeHero"} className={"storeHero"}>
                <div id={"storeHeroText"} className={"storeHeroText"}>
                    <h1>Infusion Coffee and Tea</h1>
                    <p>Infusion isn’t just your neighborhood coffee shop with a variety of seating, open-air features, a spacious patio, and speedy wifi. It is also home to a state-of-the-art Specialty Coffee Association (SCA) certified coffee lab, as well as the first SCA authorized coffee academy in the Americas: International Barista and Coffee Academy (IBCA). The owner of Infusion, Patrick O’Malley, is a true coffee lover who travels the world to teach, consult, and bring back the best coffee and tea for our customers.</p>
                    <div id={"buttonRow"} className={"buttonRow"}>
                        <NavLink to={"https://www.infusioncoffeetea.com/"}>Visit their Website</NavLink>
                        <NavLink to={"https://www.infusioncoffeetea.com/menu"}>View their Menu</NavLink>
                        <div id={"iconRow"} className={"iconRow"}>
                            <img title="Wifi Accessible" src={"../wifi.svg"} alt={"Wifi Attribute Symbol"} className={"attributeSymbol"}/>
                            <img title="Social Activity Common" src={"../social.svg"} alt={"Social Attribute Symbol"} className={"attributeSymbol"}/>
                            <img title="In-House Roaster" src={"../roaster.svg"} alt={"Roaster Attribute Symbol"} className={"attributeSymbol"}/>
                        </div>
                    </div>
                </div>
                <div className={"shopVideo"}>
                    <video controls>
                        <source src={"../roasting.mp4"} type={"video/mp4"}/>
                    </video>
                </div>
            </section>
            <section id={"storeInfo"} className={"storeInfo"}>
                <div className={"infoContainer"}>
                    <article className={"recommendation"}>
                        <h2>Elizabeth Shell</h2>
                        <h4 className={"postTime"}>2mon ago</h4>
                        <p>Friends, this place is such an overlooked gem.  Always quality coffee & service, lots of seating and natural light, great patio, people who take the coffeehouse experience personally and pull it off unpretentiously and consistently.   I mean, just look what you get when you order a drip coffee with a splash of oat.  Makes ya feel downright cosmopolitan.  Where am I, a European sidewalk cafe?? Oh no, I’m just in Tempe. How pleasant.</p>
                    </article>
                    <article className={"recommendation"}>
                        <h2>Vishnu Rajeev</h2>
                        <h4 className={"postTime"}>1y ago</h4>
                        <p>A great place to spend time! As a graduate student at ASU, I was looking for a good cafe to hangout and do my assignments. Infusion has a great ambience to help you concentrate on your work. I tried the food here and I found it to be reasonably priced and delicious. The coffee here is worth dying for! I had the Cafe Mocha and I loved it. This is one of those places I look forward to visiting frequently. Also, it might get crowded sometimes, in which case it wouldn't be a great place to study.</p>
                    </article>
                    <article className={"recommendation"}>
                        <h2>Zach Lyman</h2>
                        <h4 className={"postTime"}>1y ago</h4>
                        <p>Great set up and vibe! The baristas were very kind. A lot of space and it was nice to sit at the bar. I really loved the parts on the wall. If you are in Tempe check it out. But heads up if you want drip coffee after a certain time it is not available.

                            The reason I didn’t give five stars was the internet was a little slow and parking was hard to do. Plus the cold brew needed a little more water added for my taste. I ended up not drinking it at all. I will be going back and trying something else.</p>
                    </article>
                </div>
            </section>
            <section className={"imagesSection"}>
                <section id={"shopImages"} className={"shopImages"}>
                    <div className={"storeCell"}>
                        <img src={"./infusion/infusion1.jpg"} alt={"Owner of Infusion Coffee"}/>
                    </div>
                    <div className={"storeCell"}>
                        <img src={"./infusion/infusion2.jpg"} alt={"Tea and Pastry"}/>
                    </div>
                    <div className={"storeCell"}>
                        <img src={"./infusion/infusion3.jpeg"} alt={"View of Outside Seating"}/>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default RecommendationOne