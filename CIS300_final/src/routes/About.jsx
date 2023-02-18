import "./About.css"

const About = () => {
    return (
        <main className={"aboutMain"}>
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