
import { Card } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../../constant';
import CustomPagination from '../pagination';

const { Meta } = Card;

const Exercises = () => {

    const [targetList, setTargetList] = useState([])
    const [pageIndex, setPageIndex] = useState(0)

    const handlePaginationChange = (e) => {
        console.log(e);
        setPageIndex(e)
    };


    useEffect(() => {
        if (targetList.length === 0) {
            const options = {
                method: 'GET',
                url: 'https://exercisedb.p.rapidapi.com/exercises',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                // debugger
                setTargetList(response.data)
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, [targetList])
    return (
        <>
            <div>
                <div className='bg-[#f8f6f1] pb-10 mb-20'>
                    <div className='w-11/12 m-auto'>
                        <h3 className='text-3xl font-bold'>Showing Results</h3>
                        <div className='grid gap-5 grid-cols-4  rounded-3xl'>
                            {
                                targetList.slice(pageIndex * 12, 12 * ( pageIndex + 1)).map((element) => {
                                    return (
                                        <div key={element.id}>
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

                    </div>
                </div>
                <CustomPagination handlePaginationChange={handlePaginationChange} pageIndex={pageIndex} total={targetList.length} />
            </div>
        </>
    )
}

export default Exercises