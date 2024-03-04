const partnerForm = () => {
    <div id="partnerForm">
        <div className="container">
            <h1 className="sub-title">Partner Form</h1>
            <form>
                <input type="text" name="Name" placeholder="Your Name" required></input>
                <input type="email" name="Email" placeholder="Your Email" required></input>
                <div >
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    </div>
}

export default partnerForm;