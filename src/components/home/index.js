import { Pagination } from "antd"
import SearchComponent from '../search'
import Cards from "../cards"
import Exercises from "../exercises"
import Header from "../header"
import Slider from "../slider"
import CustomPagination from "../pagination"

const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <SearchComponent />
            <Cards />
            <Exercises />
        </>
    )
}

export default Home