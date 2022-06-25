import { Pagination } from 'antd';


const CustomPagination = (props) => {

    
    const pageCount = Math.ceil(props.total / 12);

    return (
        <>
            <div className='flex justify-center py-5'>
                <Pagination className='border-none'
                    onChange={props.handlePaginationChange}
                    defaultCurrent={1}
                    total={pageCount}
                />
            </div>
        </>
    )
}

export default CustomPagination