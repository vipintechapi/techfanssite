import { getCategories } from '../../http'
import React, { useState } from 'react'
import { Categories } from '../../types'

interface Props {
    categories: Categories[]
}

const admin = ({ categories }: Props) => {

    const [input, setInput] = useState({ title: "", shortDecs: "", html: "", categoryId: "" })

    const loginHandler = async (e: any) => {

        e.preventDefault()

    }

    return (
        <div>
            <form action="">
                <div>
                    <input onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        type="text"
                        name="title"
                        placeholder='Enter Title'
                    />
                </div>
                <div>
                    <input onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        type="text"
                        name="shortDecs"
                        placeholder='Enter Short Discription'
                    />
                </div>
                <div>
                    <input onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        type="text"
                        name="html"
                        placeholder='Enter HTML'
                    />
                </div>
                <div>
                    <select onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} name="categoryId">
                        <option value="">Select Catogary</option>
                        {
                            categories?.map(category => {
                                return <option key={category._id} value={category._id}>{category.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="input">
                    <button onClick={loginHandler}>Login</button>
                </div>
            </form>
        </div>
    )
}


export const getServerSideProps = async () => {

    const categories = await getCategories()

    return {
        props: {
            categories: categories.data,
        }
    }
}

export default admin