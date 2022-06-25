import axios from "axios"
import { useEffect, useState } from "react"
import { options } from "../../constant"

const SimilarTargetExercises = (props) => {

    const [similarTargetExercises, setSimilarTargetExercises] = useState([]);


    useEffect(() => {
        options.url = 'https://exercisedb.p.rapidapi.com/exercises/target/'
            axios.request(options).then(function (response) {
                setSimilarTargetExercises(response.data)
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
    })
    return(
        <>
        </>
    )
}

export default SimilarTargetExercises