import SearchComponent from '../search'
import TopMenu from "../topMenu"
import Exercises from "../exercises"
import Header from "../header"
import Slider from "../slider"
import { useState } from 'react'
import { options } from '../../constant'
import axios from 'axios'

const Home = () => {
    const [active, setActive] = useState('all');
    const [filteredData , setFilteredData] = useState([])

    const handleBodyPartFilter = (element) => {
        options.url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${element}`
        axios.request(options).then(function (response) {
            setFilteredData(response.data)
        }).catch(function (error) {
            console.error(error);
        });
        setActive(element)
    }
    
    return (
        <>
            <Header />
            <Slider />
            <SearchComponent />
            <TopMenu active={active} handleBodyPartFilter={handleBodyPartFilter}/>
            <Exercises  filter={active} filteredData={filteredData} />
        </>
    )
}

export default Home