import "./Home.css"
import {NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <main>
            <Helmet>
                <title>Roast Ranger | Home</title>
                <meta name="description" content={"Explore new coffee shops curated just for you. Select from specific qualities that not even Google lets you filter for."}/>
            </Helmet>
            <section id={"homeHero"} className={"homeHero"}>
                <div id={"homeHeroText"} className={"homeHeroText"}>
                    <h2>The tool to find the ultimate coffee experience.</h2>
                    <p>We help you find local coffee shops by important characteristics not usually considered, such as music selection, outlet availability, seating, and menu variety.</p>
                    <div id={"buttonRow"} className={"buttonRow"}>
                        <NavLink to={"/preferences"}>Take Quiz</NavLink>
                        <NavLink to={"/about"}>Learn More</NavLink>
                    </div>
                </div>
                <div id={"homeHeroImage"} className={"homeHeroImage"}></div>
            </section>
            <h1>User Testimonials</h1>
            <section id={"testimonials"} className={"testimonialsContainer"}>
                <article>
                    <h3>Megan Jones</h3>
                    <p>Roast Ranger helped me find an amazing local roaster that lets people watch the roasting process and participate in cupping events. This product is awesome!</p>
                </article>
                <article>
                    <h3>Michael Rodriguez</h3>
                    <p>I've always had trouble finding places to sit down and have a cup of coffee while doing work without abnoxious music blasting. Roast Ranger showed me the perfect spot, only 5 minutes from my house!</p>
                </article>
                <article>
                    <h3>James Garcia</h3>
                    <p>The shop I found on Roast Ranger lets me host my book club meetings there. Everyone loves the drinks and mood. I could not be happier with the website! Please check this out!</p>
                </article>
            </section>
            <section id={"shopImages"} className={"shopImages"}>
                <div className={"cell"}>
                    <img src={"shopImage1.jpg"} alt={"Luana's Coffee Yard"}/>
                </div>
                <div className={"cell"}>
                    <img src={"shopImage2.jpg"} alt={"Light Heart Coffee Shop"}/>
                </div>
                <div className={"cell"}>
                    <img src={"shopImage3.jpg"} alt={"Press Coffee Shop"}/>
                </div>
            </section>
        </main>
    )
}

export default Home