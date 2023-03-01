import "./About.css"
import {Helmet} from "react-helmet";

const About = () => {
    return (
        <main className={"aboutMain"}>
            <Helmet>
                <title>Roast Ranger | About Us</title>
                <meta name="description" content={"Learn more about why Roast Ranger was founded and what we do for you."}/>
            </Helmet>
            <div id={"aboutHeroImage"} className={"aboutHeroImage"}>
                <div id={"aboutHeroText"} className={"aboutHeroText"}>
                    <h1>For A Better Cup</h1>
                    <p>
                        Here at Roast Ranger, we understand the complex set of features the perfect coffee shop has.
                        We also know that one size does not fit all.
                    </p>
                    <p>
                        Our services use state-of-the-art algorithms to recommend the perfect coffee shop for you.
                        We work hard to get accurate information about each and every shop you see.
                    </p>
                    <p>
                        Searching for the best location costs you time, energy, and money. This website takes the guesswork out of the equation,
                        leaving you with one critical task: to absolutely love your home-away-from-home.
                    </p>
                    <h3>Made with love and care,</h3>
                    <img src={"signature.png"} alt={"Garrett Storey"}/>
                </div>
            </div>
        </main>
    )
}

export default About