
import { Card } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CustomPagination from '../pagination';
import { options } from '../../constant';
import { Link } from 'react-router-dom';
import Cards from '../cards';


const Exercises = (props) => {

    const [targetList, setTargetList] = useState([])
    const [pageIndex, setPageIndex] = useState(0)

    const isFilteradData = props.filteredData.length > 0;

    const handlePaginationChange = (e) => {
        setPageIndex(e)
    };

    useEffect(() => {
        if (targetList.length === 0) {
            options.url = 'https://exercisedb.p.rapidapi.com/exercises'
            axios.request(options).then(function (response) {
                // debugger
                setTargetList(response.data)
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, [targetList])


    if (isFilteradData) {
        return (
            <>
                <div>
                    <div className='bg-[#f8f6f1] pb-10'>
                        <div className='w-11/12 m-auto'>
                            <h3 className='text-3xl font-bold py-5'>Showing Results</h3>
                            <div className='grid gap-5 grid-cols-4  rounded-3xl'>
                                {
                                    props.filteredData.slice(pageIndex * 12, 12 * (pageIndex + 1)).map((element) => {
                                        return (
                                            <div key={element.id}>
                                                <Card
                                                    hoverable bordered className='w-auto h-[500px] shadow-indigo-500/40 '
                                                    cover={<img alt="example" className='h-[255px] object-contain sm:h-[325px]' src={element.gifUrl} />}
                                                >
                                                    {/* <Meta title={element.equipment}/> */}
                                                    <div className=' py-0'>

                                                        <span className='p-[8px] bg-indigo-800 mr-[15px] text-white rounded-full capitalize'>{element.bodyPart}</span>
                                                        <span className='p-[8px] bg-indigo-800 text-white rounded-full capitalize'>{element.target}</span>
                                                    </div>
                                                    <div className='mt-6'>
                                                        <span className='text-2xl font-bold mt-5'>{element.name}</span>
                                                    </div>

                                                </Card>
                                            </div>

                                        )

                                    })

                                }
                            </div>

                        </div>
                    </div>
                    <CustomPagination handlePaginationChange={handlePaginationChange} pageIndex={pageIndex} total={props.filteredData.length} />
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <div className='bg-[#f8f6f1] pb-10'>
                    <div className='w-11/12 m-auto'>
                        <h3 className='text-3xl font-bold py-5'>Showing Results</h3>
                        <div className='grid gap-5 grid-cols-4  rounded-3xl'>
                            {
                                targetList.slice(pageIndex * 12, 12 * (pageIndex + 1)).map((element) => {
                                    return (
                                        <Link key={element.id} to={`/detail/${element.id}`}>
                                            <Cards
                                                gifUrl={element.gifUrl}
                                                bodyPart={element.bodyPart}
                                                name={element.name}
                                                target={element.target}
                                            />
                                        </Link>
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