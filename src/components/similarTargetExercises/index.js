import { Carousel } from "antd";
import axios from "axios"
import { useEffect, useState } from "react"
import { options, settings } from "../../constant"
import Cards from "../cards"

const SimilarTargetExercises = ({ target }) => {

    const [similarTargetExercises, setSimilarTargetExercises] = useState([]);


    useEffect(() => {
        if (similarTargetExercises.length === 0) {
            options.url = 'https://exercisedb.p.rapidapi.com/exercises/target/' + target
            axios.request(options).then(function (response) {
                setSimilarTargetExercises(response.data)
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }

    }, [target, similarTargetExercises])

    return (
        <>
            <div className="w-11/12 m-auto ">
                <h3 className="text-2xl font-semibold">Similar Target Muscle Exercises</h3>
                <Carousel {...settings} arrows={true} draggable={true} className='my-5'>
                    {

                        similarTargetExercises.map((element) => {
                            return (
                                <div className="p-2">
                                    <Cards
                                        gifUrl={element.gifUrl}
                                        bodyPart={element.bodyPart}
                                        target={element.target}
                                        name={element.name}


                                    />
                                </div>
                            )
                        })
                    }


                </Carousel>
            </div>
        </>
    )
}

export default SimilarTargetExercises