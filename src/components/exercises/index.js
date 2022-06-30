
import { useState } from 'react';
import CustomPagination from '../pagination';
import Cards from '../cards'
import { Link } from 'react-router-dom';
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
                        <div className='grid gap-5 grid-cols-2 rounded-3xl sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 cardresult'>
                            {
                                props.filteredData.slice(pageIndex * 12, 12 * (pageIndex + 1)).map((element) => {
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
                <CustomPagination handlePaginationChange={handlePaginationChange} pageIndex={pageIndex} total={props.filteredData.length} />
            </div>
        </>
    )
}



export default Exercises