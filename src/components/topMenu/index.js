import { Button, Carousel } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import gym from "../../assets/weights.png"
import { settings } from '../../constant';

const TopMenu = (props) => {

  const [bodyPartList, setBodyPartList] = useState([])

  useEffect(() => {
    if (bodyPartList.length === 0) {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        setBodyPartList(response.data)
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

    }

  }, [bodyPartList])

  


  return (
    <>
      <div className='pb-24 w-10/12 m-auto'>
        <Carousel {...settings} arrows={true} draggable={true} className='my-14 topmenu-slider'>
          {
            bodyPartList.map((element, index) => {
              return (
                <div key={index} onClick={() => props.handleBodyPartFilter(element)} className={props.active === element ? 'box-border p-5' : 'p-5'}>
                  <Button className='w-full h-[240px] flex flex-col justify-center items-center bg-[#f8f6f0] hover:scale-[1.1] border-transparent hover:text-[#8B0000] hover:border-transparent hover:bg-[#dfddd9]'>
                    <img src={gym} alt="logo" className='h-[50px] w-auto' />
                    <p className='py-5 text-2xl font-medium capitalize '>{element}</p>
                  </Button>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </>
  )
}

export default TopMenu