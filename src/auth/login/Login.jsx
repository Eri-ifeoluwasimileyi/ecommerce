import React from "react"

const Login = () => {
    return (
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" placeholder="password" />
            </div>
        </div>
    )
}

export default Login