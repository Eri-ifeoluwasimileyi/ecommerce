import React from "react"
import { Link } from "react-router"

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
            <div className={}>
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Register