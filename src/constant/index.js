import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

export const baseUrl = "https://exercisedb.p.rapidapi.com/exercises";

export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    nextArrow: window.innerWidth > 600 ? <SampleNextArrow /> : <></>,
    prevArrow: window.innerWidth > 600 ? <SamplePrevArrow /> : <></>,
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ><ArrowLeftOutlined style={{ fontSize: '16px', color: '#08c' }} /></div>
    )
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className + " text-black"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ><ArrowRightOutlined style={{ fontSize: '16px', color: '#08c' }} /></div>
    )
  }