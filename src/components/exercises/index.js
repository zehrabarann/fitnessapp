
import { Card } from 'antd';
import { useState } from 'react';
import CustomPagination from '../pagination';

const Exercises = (props) => {

    const [pageIndex, setPageIndex] = useState(0);

    const handlePaginationChange = (e) => {
        setPageIndex(e)
    };


    return (
        <>
            <div>
                <div className='bg-[#f8f6f1] pb-10'>
                    <div className='w-11/12 m-auto'>
                        <h3 className='text-3xl font-bold py-8'>Showing Results</h3>
                        <div className='grid gap-5 grid-cols-2 rounded-3xl sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
                            {
                                props.filteredData.slice(pageIndex * 12, 12 * (pageIndex + 1)).map((element) => {
                                    return (
                                        <div key={element.id}>
                                            <Card
                                                hoverable bordered className='w-auto h-[420px] shadow-indigo-500/40 sm:h-[500px] '
                                                cover={<img alt="example" className='h-[255px] object-contain sm:h-[325px]' src={element.gifUrl} />}
                                            >
                                                {/* <Meta title={element.equipment}/> */}
                                                <div className=' py-0'>

                                                    <span className='p-[8px] bg-indigo-800 mr-[15px] text-white rounded-full capitalize'>{element.bodyPart}</span>
                                                    <span className='p-[8px] bg-indigo-800 text-white rounded-full capitalize'>{element.target}</span>
                                                </div>
                                                <div className='mt-6'>
                                                    <span className='text-2xl font-bold mt-5 capitalize'>{element.name}</span>
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



export default Exercises