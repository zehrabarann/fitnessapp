
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react"
import Header from "../header";
import { options } from '../../constant'
import { useParams } from "react-router-dom";
import bodyPart from "../../assets/bodyPart.png"
import target from "../../assets/target.png"
import equipment from "../../assets/equipment.png"
import SameNameExcercises from "../sameNameExercises";
import SimilarTargetExercises from "../similarTargetExercises";
import SimilarEquipmentExercises from "../SimilarEquipmentExercises";

const Detail = () => {

  const [exercises, setExercises] = useState({})

  let { id } = useParams();




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

  if(Object.keys(exercises).length === 0) {
    return(
      <span>Loading</span>
    )
  }
  return (
    <>
      <div className="bg-[#f8f6f0]">
        <Header />
        <Row>
          <div className="flex w-11/12 m-auto my-20">


            <Col span={12}>
              <img src={exercises.gifUrl} alt="Gif" className="w-[730px] h-[750px]" />
            </Col>
            <Col span={12}>
              <div>
                <span className="text-5xl font-bold">{exercises.name}</span>
              </div>
              <div className="text-2xl my-5">
                <p>Exercises keep you strong.  <span>{exercises.name}</span>bup is one
                  of the best <br /> exercises to target your {exercises.target}. It will help you improve your{' '}
                  <br /> mood and gain energy.</p>
              </div>
              <div className="flex flex-col my-10">
                <div className="flex items-center mt-5">
                  <button className="w-[100px] h-[100px] flex items-center justify-center bg-[#fff2db] rounded-full">
                    <img src={bodyPart} alt="logo" className="h-[45px] w-[45px]" />
                  </button>

                  <span className="ml-10 text-2xl font-semibold">{exercises.bodyPart}</span>
                </div>
                <div className="flex items-center mt-5">
                  <button className="w-[100px] h-[100px] flex items-center justify-center bg-[#fff2db] rounded-full">
                    <img src={target} alt="logo" className="h-[45px] w-[45px]" />
                  </button>

                  <span className="ml-10 text-2xl font-semibold">{exercises.target}</span>
                </div>
                <div className="flex items-center mt-5">
                  <button className="w-[100px] h-[100px] flex items-center justify-center bg-[#fff2db] rounded-full">
                    <img src={equipment} alt="logo" className="h-[45px] w-[45px]" />
                  </button>

                  <span className="ml-10 text-2xl font-semibold">{exercises.equipment}</span>
                </div>


              </div>
            </Col>
          </div>

        </Row>
        <SameNameExcercises name={exercises.name} />

        <SimilarTargetExercises target={exercises.target}/>

        <SimilarEquipmentExercises equipment={exercises.equipment}/>
      </div>


    </>
  )
}

export default Detail