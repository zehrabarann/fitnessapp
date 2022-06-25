
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react"
import Header from "../header";

const Detail = () => {

    const [exercises, setExercises] = useState({})

    const getExercisesById = () => {
       
            const options = {
              method: 'GET',
              url: 'https://exercisedb.p.rapidapi.com/exercise/',
              headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
              }
            };
      
            axios.request(options).then(function (response) {
              setExercises(response.data)
              console.log(response.data);
            }).catch(function (error) {
              console.error(error);
            });
      
          

    }

    useEffect(() => {
        if (Object.keys(exercises).length === 0) {
            getExercisesById()
        }
      })

    return(
        <>
        <div>
            <Header/>
            <Row>
                <Col span={12}>
                    
                    
                    
                </Col>
                <Col span={12}>
                    <div>
                    <h3>deneme{exercises.name}</h3>

                    </div>
                    
                </Col>
            </Row>
        </div>

      
        </>
    )
}

export default Detail