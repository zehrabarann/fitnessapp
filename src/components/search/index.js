import { Input} from 'antd';
const { Search } = Input;

const SearchComponent = () => {


const onSearch = (value) => console.log(value);
    return(
        <>
        <div className='w-9/12 m-auto my-14'>

        
        <h3 className='text-5xl font-bold text-center my-5'>Awesome Exercises You Should Know</h3>
        <Search className='w-2/5 m-auto flex'
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