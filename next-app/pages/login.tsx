import { baseUrl, getPosts, login } from '../http'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {

    const [input, setInput] = useState({ email: "", password: "" })
    const router = useRouter()

    const loginHandler = async (e: any) => {

        e.preventDefault()

        if (!input.email) return
        if (!input.password) return

        let data: any
        try {
            data = await login(input)
            if (data.data.message !== "Login successful") return
            console.log(data.data.message)
            router.push("/admin")
        } catch (err: any) {
            console.error(err.message)
        }

    }

    return (
        <div>
            <form action="">
                <div className="input">
                    <input onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        type="text"
                        name="email"
                        placeholder='Enter Your Email'
                    />
                </div>
                <div className="input">
                    <input onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="text" name="password" placeholder='Enter Your Password' />
                </div>
                <div className="input">
                    <button onClick={loginHandler}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login