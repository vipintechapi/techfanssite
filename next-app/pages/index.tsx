import { getCategories, getPosts } from "../http"
import axios from "axios"
import { Posts, Categories, Pagination } from "../types"

interface Props {
  posts: Posts
  categories: Categories
  pagination: Pagination
}

const Home = ({ posts, categories, pagination }: Props) => {

  return (
    <div>Home</div>
  )
}

export const getServerSideProps = async () => {

  const posts = await getPosts()
  const categories = await getCategories()

  return {
    props: {
      posts: posts.data,
      categories: categories.data,
      pagination: posts.data.pagination
    }
  }
}

export default Home