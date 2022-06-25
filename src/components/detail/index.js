
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react"
import Header from "../header";
import { options } from '../../constant'
import { useParams } from "react-router-dom";

const Detail = () => {

  const [exercises, setExercises] = useState({})

  let { id } = useParams();

  console.log('id', id)

  const getExercisesById = () => {
    options.url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
    axios.request(options).then(function (response) {
      setExercises(response.data)
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });



  }

  useEffect(() => {
    if (Object.keys(exercises).length === 0 && !!id) {
      getExercisesById()
    }
  })

  return (
    <>
      <div>
        <Header />
        <Row>
          <div className="flex w-full">

          
          <Col span={12}>
              <img src={exercises.gifUrl} alt="Gif" className="w-[730px] h-[750px]"/>
          </Col>
          <Col span={12}>
            <div>
              <span className="text-5xl font-bold">{exercises.name}</span>
            </div>
            <div className="flex flex-col">
              <div>
              <span>{exercises.bodyPart}</span>

              </div>
              
              <span>{exercises.target}</span>
              <span>{exercises.equipment}</span>
              
            </div>
          </Col>
          </div>

        </Row>
      </div>


    </>
  )
}

export default Detail