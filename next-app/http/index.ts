import axios from "axios"

export const baseUrl = axios.create({ baseURL: "https://techfansapi.cyclic.app/api/" })

export const getPosts = async () => await baseUrl.get("posts")
export const getCategories = async () => await baseUrl.get("category")
export const login = async (data : any) => await baseUrl.post("users/login", data)