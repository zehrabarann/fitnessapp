import { Input } from 'antd';
const { Search } = Input;

const SearchComponent = (props) => {

  
    return (
        <>
            <div className='w-11/12 m-auto py-10 sm:py-24 sm:9/12'>
                <h3 className='text-5xl font-bold text-center my-5'>Awesome Exercises You <span className='float-left w-full py-3'>Should Know</span></h3>
                <Search className='w-full m-auto pt-8 flex hover:boder-[#333] sm:w-3/5 sm:pt-0'
                    placeholder="Search Exercises"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onChange={props.handleSearch}
                />
            </div>
        </>
    )
}

export default SearchComponent