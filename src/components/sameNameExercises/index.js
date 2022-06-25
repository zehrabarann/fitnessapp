import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react"
import { options } from '../../constant';

const SameNameExcercises = () => {

    const [sameNameExercises, setSameNameExercises ] = useState([])

    useEffect(() => {
        options.url = 'https://youtube-search-and-download.p.rapidapi.com/search?query=3/4%20sit-up%20exercise'
            axios.request(options).then(function (response) {
                // debugger
                setSameNameExercises(response.data)
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
    }) 
    return(
        <>
        <div>
            {

            sameNameExercises.map((element) => {
                return(
                    <div>
                        <Card
                                                hoverable bordered className='w-auto h-[500px] shadow-indigo-500/40 '
                                                cover={<img alt="example" className='h-[325px] object-contain ' src={element.gifUrl} />}
                                            >
                                                {/* <Meta title={element.equipment}/> */}
                                                <div className=' py-0'>

                                                    <span className='p-[8px] bg-indigo-800 mr-[15px] text-white rounded-full'>{element.bodyPart}</span>
                                                    <span className='p-[8px] bg-indigo-800 text-white rounded-full'>{element.target}</span>
                                                </div>
                                                <div className='mt-8'>
                                                    <span className='text-3xl font-bold mt-5'>{element.name}</span>
                                                </div>

                                            </Card>

                    </div>
                )
            })

            }
        </div>
        </>
    )

}

export default SameNameExcercises