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
            }).catch(function (error) {
                console.error(error);
            });
        }

    }, [target, similarTargetExercises])
    settings.dots = false
    return (
        <>
            <div className="w-11/12 m-auto my-10 ">
                <h3 className="text-3xl font-bold sm:text-4xl">Similar <span className="text-[#8B0000]">Target Muscle</span> Exercises</h3>
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