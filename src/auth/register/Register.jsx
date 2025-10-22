import React, { useState } from "react"
import { Link, useNavigate } from "react-router"
import styles from "./register.module.css"
import { usePostDataMutation } from "../../api/productApi"

const token = import.meta.env.VITE_TOKEN

const Register = () => {
    const userProfile = {
        firstName:"",
        lastName:"",
        email:"",
        password:""
    }

    const [user, setUser] = useState(userProfile);
    const [postData, {isLoading, isError, isSuccess}] = usePostDataMutation()
    const navigate = useNavigate()

    if(isLoading){
        return(<p>Loading...</p>)
    }

    const handleChange = (event) => {
        console.log(event)
        const {name, value} = event.target
        setUser((prevUser) => ({
            ...prevUser,[name]:value.trim()
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            let response = await postData(user, token).unwrap()
            if(response) {
                setTimeout(() => navigate('/home'), 2000)
            }  
        } catch (error){
            console.log(error)
        }        
    }

    return (
        <div>
            {isError?<p>{isError}</p>: ""}
        <form onSubmit={handleSubmit} action="">
            <div>
                <label htmlFor="firstName">FirstName</label>
                <input name="firstName" type="text" onChange={handleChange} placeholder="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">LastName</label>
                <input name="lastName" type="text" onChange={handleChange} placeholder="lastName" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" onChange={handleChange} placeholder="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" onChange={handleChange} placeholder="password" />
            </div>
            <button type="submit">Register</button>
        </form>
            <div className={styles.linkToLogin}>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register