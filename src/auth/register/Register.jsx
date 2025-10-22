import React from "react"
import { Link } from "react-router"
import styles from "./register.module.css"

const Register = () => {
    return (
        <div>
        <form action="">
            <div>
                <label htmlFor="firstName">FirstName</label>
                <input type="text" placeholder="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">LastName</label>
                <input type="text" placeholder="lastName" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" placeholder="password" />
            </div>
        </form>
            <div className={styles.linkToLogin}>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register