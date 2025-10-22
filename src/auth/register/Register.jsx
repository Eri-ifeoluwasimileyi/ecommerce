import React, {useState} from "react"
import { Link } from "react-router"
import styles from "./register.module.css"

const Register = () => {

    const userProfile = {
        firstName:"",
        lastName:"",
        email:"",
        password:""
    }
    const [user, setUser] = useState(userProfile);

    const handleChange = (event) => {
        console.log(event)
        const {name, value} = event.target
        setUser()
    }

    // const handleFirstName = (e) => {
    //     const firstName = e.target.value.trim()
    //     setFirstName(firstName)
    // }
    
    // function handleLastName (event) {
    //     const lastName = event.target.value.trim()
    //     setLastName(lastName)
    // }


    return (
        <div>
        <form action="">
            <div>
                <label htmlFor="firstName">FirstName</label>
                <input type="text" onChange={handleChange} placeholder="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">LastName</label>
                <input type="text" onChange={handleChange} placeholder="lastName" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={handleChange} placeholder="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" onChange={handleChange} placeholder="password" />
            </div>
        </form>
            <div className={styles.linkToLogin}>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register