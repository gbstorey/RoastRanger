import "./Contact.css"


const Contact = () => {
    return (
        <main>
                <form method="post" action="https://webdevbasics.net/scripts/pacific.php">
                    <h1>Contact Us</h1>
                    <p>*Required fields are marked with an asterisk.</p>
                    <label htmlFor="myFName">*First Name:</label>
                    <input id="myFName" name="myFName" required></input>
                    <label htmlFor="myLName">*Last Name:</label>
                    <input id="myLName" name="myLName" required></input>
                    <label htmlFor="telNumber">Phone Number:</label>
                    <input id="telNumber" name="telNumber" type={"tel"}></input>
                    <label htmlFor="email">*Email:</label>
                    <input id="email" name="email" required type={"email"}></input>
                    <label htmlFor="myFName">*Message:</label>
                    <textarea id="myFName" name="myFName" required rows={7}></textarea>
                    <input type={"submit"}/>
                </form>
        </main>
    )
}

export default Contact