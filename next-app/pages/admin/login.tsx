import { login } from '../../http'
import React, { useState } from 'react'

const Login = () => {

    const [input, setInput] = useState({ email: "", password: "" })

    const handler = async (e: any) => {

        e.preventDefault()

        if (!input.email) return
        if (!input.password) return

        const data = await login(input)
        console.log(data)
    }

    return (
        <div>
            <form action="">
                <div className="input">
                    <input onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="text" name="email" placeholder='Enter Your Email' />
                </div>
                <div className="input">
                    <input onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="text" name="password" placeholder='Enter Your Password' />
                </div>
                <div className="input">
                    <input onClick={handler} type="submit"  />
                </div>
            </form>
        </div>
    )
}

export default Login