import { Carousel } from "antd";
import axios from "axios";
import { useEffect, useState } from "react"
import { options, settings } from "../../constant";
import Cards from "../cards"

const SimilarEquipmentExercises = ({ equipment }) => {

    const [similarEquipmentExercises, setSimilarEquipmentExercises] = useState([]);
    settings.dots = false

    useEffect(() => {
        if (similarEquipmentExercises.length === 0) {
            options.url = 'https://exercisedb.p.rapidapi.com/exercises/equipment/' + equipment
            axios.request(options).then(function (response) {
                setSimilarEquipmentExercises(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }

    }, [equipment, similarEquipmentExercises])
    return (
        <>
        <div className="w-11/12 m-auto py-10">

        <h3 className="text-3xl font-bold sm:text-4xl">Similar <span className="text-[#8B0000]">Equipment </span>Exercises</h3>

        
            <Carousel {...settings} arrows={true} draggable={true} className='my-5'>
                {
                    similarEquipmentExercises.map((element) => {
                        return (
                            <div className="p-2">
                                <Cards
                                    gifUrl={element.gifUrl}
                                    bodyPart= {element.bodyPart}
                                    target = {element.target}
                                    name= {element.name}

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

export default SimilarEquipmentExercises