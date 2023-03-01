import "./Preferences.css"
import PreferenceCheckbox from "../elements/PreferenceCheckbox.jsx";
import {Helmet} from "react-helmet";

const shop_types = [
    {id:"type_cafe_bakery", label:"Cafe Bakery", description: "Serves fresh-baked pastries, sandwiches, and light fare accompanied by, but not focused on, coffee and tea."},
    {id:"type_specialty_cafe", label:"Specialty Cafe", description: "Serves high-end treats and specialty coffee and tea. Usually a location for dates or formal meetings."},
    {id:"type_drive_thru_cafe", label:"Drive-Thru Cafe", description: "Much like a Bakery cafe, but designed for quick ordering and access by car."},
    {id:"type_drive_thru_coffee_shop", label:"Drive-Thru Coffee Shop", description: "A location focusing mostly on drinks, designed for quick ordering and access by car."},
    {id:"type_library_coffee_shop", label:"Library Coffee Shop", description: "A location in a campus library or bookstore intended for quiet experiences, studying, and reading."},
    {id:"type_traditional_coffee_shop", label:"Traditional Coffee Shop", description: "A walk-in coffee shop with seating for many purposes. Use other preferences to help narrow down this option."},
    {id:"type_experimental_coffee_shop", label:"Experimental Coffee Shop", description: "A coffee shop with an interesting twist, such as a cat cafe."},
]

const shop_attributes = [
    {id: "attr_location", label: "Location"},
    {id: "attr_no_music", label: "No Music"},
    {id: "attr_has_music", label: "Has Music"},
    {id: "attr_cleanliness", label: "Exceptional Cleanliness"},
    {id: "attr_large_tables", label: "Large Tables"},
    {id: "attr_books_games", label: "Books and Games"},
    {id: "attr_outlets", label: "Outlet Availability"},
]

const shop_themes = [
    {id: "theme_rustic", label: "Rustic"},
    {id: "theme_garden", label: "Garden"},
    {id: "theme_vintage", label: "Vintage"},
    {id: "theme_industrial", label: "Industrial"},
    {id: "theme_modern", label: "Modern"},
    {id: "theme_boho_chic", label: "Boho Chic"},
    {id: "theme_artistic", label: "Artistic"},
    {id: "theme_cats", label: "Cats"},
    {id: "theme_cozy", label: "Cozy"},
    {id: "theme_cultural", label: "Cultural"},
]

const shop_drinks = [
    {id: "drink_espresso", label: "Espresso"},
    {id: "drink_drip_coffee", label: "Drip Coffee"},
    {id: "drink_milk_espresso", label: "Latte/Cappuccino/Macchiato"},
    {id: "drink_cortado_piccolo", label: "Cortado/Piccolo"},
    {id: "drink_traditional_tea", label: "Black/White/Green Tea"},
    {id: "drink_oolong_tea", label: "Oolong Tea"},
    {id: "drink_rooibos_tea", label: "Rooibos Tea"},
    {id: "drink_herbal_tea", label: "Herbal Tea"},
    {id: "drink_kid_friendly", label: "Kid-Friendly Drinks"},
    {id: "drink_alcoholic", label: "Alcoholic Drinks"},
    {id: "drink_energy", label: "Mixed Energy Drinks"},
]



const Preferences = () => {
    return (
        <main>
            <Helmet>
                <title>Roast Ranger | Your Preferences </title>
                <meta name="description" content={"View or update your preferences for coffee shop attributes."}/>
            </Helmet>
            <form method="post" action="https://webdevbasics.net/scripts/pacific.php">
                <h1>Tell us about you!</h1>
                <div className={"preferenceWrapper"}>
                    <fieldset>
                        <legend>Choose which type of coffee shop you would like to visit.</legend>
                        <div className={"attributesCheckboxes"}>
                            {shop_types.map((shop, shop_index) => {
                                return <PreferenceCheckbox id={shop.id} label={shop.label} key={shop_index} />
                            })}
                        </div>
                        <details>
                            <summary>What do these definitions mean?</summary>
                            <ul>
                                {shop_types.map((shop, shop_index) => {
                                    return <li key={shop_index}>{shop.label}: {shop.description}</li>
                                })}
                            </ul>
                        </details>
                    </fieldset>
                    <fieldset>
                        <legend>Select which attributes are important to you.</legend>
                        <div className={"attributesCheckboxes"}>
                                {shop_attributes.map((shop, shop_index) => {
                                    return <PreferenceCheckbox id={shop.id} label={shop.label} key={shop_index} />
                                })}
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Select which themes are most appealing to you.</legend>
                        <div className={"attributesCheckboxes"}>
                            {shop_themes.map((shop, shop_index) => {
                                return <PreferenceCheckbox id={shop.id} label={shop.label} key={shop_index} />
                            })}
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Select which items you enjoy.</legend>
                        <div className={"attributesCheckboxes"}>
                            {shop_drinks.map((shop, shop_index) => {
                                return <PreferenceCheckbox id={shop.id} label={shop.label} key={shop_index} />
                            })}
                        </div>
                    </fieldset>
                </div>
                <button type={"submit"}>Update Preferences</button>
            </form>
        </main>
    )
}

export default Preferences