import React from "react"

export default function App() {
    const [data, setdata] = React.useState({
        email:"",
        password:"",
        passwordConf:"",
        doWant: false
    })
    
    function handleChange(event){
        const {name, value, type, checked} = event.target;
        setdata(prevdata =>{
            return{
                ...prevdata,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    /**
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    function handleSubmit(event) {
        event.preventDefault()
        const pass = data.password
        const passC = data.passwordConf
        const market = data.doWant
        if (pass===passC){
            console.log("Successfully signed up")
        }
        else{
            console.log("passwords do not match")
        }

        if(market){
            console.log("Thanks for signing up for our newsletter!")
        }
        
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                   
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                       name="password"
                    value={data.password}
                    onChange={handleChange}
                   
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConf"
                    value={data.passwordConf}
                    onChange={handleChange}
                   
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="doWant"
                        checked={data.doWant}
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
