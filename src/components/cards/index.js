import { Button, Card, Carousel } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import gym from "../../assets/gym.png"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const Cards = () => {

  const [bodyPartList, setBodyPartList] = useState([])
  const [active, setActive] = useState('all')

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    nextArrow: window.innerWidth > 600 ? <SampleNextArrow /> : <></>,
    prevArrow: window.innerWidth > 600 ? <SamplePrevArrow /> : <></>,
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ><ArrowLeftOutlined style={{ fontSize: '16px', color: '#08c' }} /></div>
    )
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className + " text-black"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ><ArrowRightOutlined style={{ fontSize: '16px', color: '#08c' }} /></div>
    )
  }


  return (
    <>
      <div>


        <Carousel {...settings} arrows={true} draggable={true} className='m-auto my-10 w-11/12'>
            {
              bodyPartList.map((element, index) => {
                return (
                  <div key={index} onClick={() => setActive(element)} className={active === element ? 'border-sky-500 box-border' : ''}>
                    <Button className='w-[250px] h-[270px] flex flex-col justify-center items-center'>
                      <img src={gym} alt="logo" className='h-[50px] w-auto' />
                      <p>{element}</p>
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

export default Cards