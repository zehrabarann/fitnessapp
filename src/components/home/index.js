import SearchComponent from '../search'
import TopMenu from "../topMenu"
import Exercises from "../exercises"
import Header from "../header"
import Slider from "../slider"
import { useState } from 'react'
import { options } from '../../constant'
import axios from 'axios'
import { useRef, useEffect } from 'react'

const Home = () => {
    const [active, setActive] = useState('all');
    const [filteredData, setFilteredData] = useState([])
    const [targetList, setTargetList] = useState([])
    const prevList = useRef();


    const handleSearch = (e) => {
        const search = e.target.value
        if( search !== "") {
            const tempData = [...prevList.current]
            const searchedExercises = tempData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search)
            );
            setTargetList(searchedExercises)
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }
        else {
            setTargetList([...prevList.current])
        }
    }

    const handleBodyPartFilter = (element) => {
        options.url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${element}`
        axios.request(options).then(function (response) {
            setFilteredData(response.data)
        }).catch(function (error) {
            console.error(error);
        });
        setActive(element)
    }


    useEffect(() => {
        if (targetList.length === 0) {
            options.url = 'https://exercisedb.p.rapidapi.com/exercises'
            axios.request(options).then(function (response) {
                prevList.current = [...response.data];
                setTargetList(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, [targetList])

    return (
        <>
            <Header />
            <Slider />
            <SearchComponent filter={active} filteredData={filteredData} handleSearch={handleSearch} />
            <TopMenu active={active} handleBodyPartFilter={handleBodyPartFilter} />
            <Exercises filter={active} filteredData={targetList.length !== 0 ? targetList : filteredData} />
        </>
    )
}

export default Home