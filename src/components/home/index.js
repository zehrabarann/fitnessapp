import SearchComponent from '../search'
import TopMenu from "../topMenu"
import Exercises from "../exercises"
import Header from "../header"
import Slider from "../slider"

const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <SearchComponent />
            <TopMenu />
            <Exercises />
        </>
    )
}

export default Home