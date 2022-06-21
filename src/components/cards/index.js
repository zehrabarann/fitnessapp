//import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card, Carousel } from 'antd';
import React from 'react';
import { ShoppingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { baseUrl } from '../../constant';
import { Link } from 'react-router-dom';
import axios from 'axios';
import gym from "../../assets/gym.png"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
const { Meta } = Card;

const Cards = () => {

  const [bodyPartList, setBodyPartList] = useState([])
  const [active, setActive] = useState('all')

console.log("env", process.env)
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
    slidesToShow: window.innerWidth > 600 ? 4.5 : 2,
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


        <Carousel {...settings} arrows={true} draggable={true}>


          <div className='p-10 plist-cart'>
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


          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Cards