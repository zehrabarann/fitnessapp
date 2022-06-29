import { Input} from 'antd';
const { Search } = Input;

const SearchComponent = () => {


const onSearch = (value) => console.log(value);
    return(
        <>
        <div className='w-9/12 m-auto py-24'>

        
        <h3 className='text-5xl font-bold text-center my-5'>Awesome Exercises You <span className='float-left w-full py-3'>Should Know</span></h3>
        <Search className='w-3/5 m-auto flex hover:boder-[#333]'
      placeholder="Search Exercises"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    </div>
        </>
    )
}

export default SearchComponent