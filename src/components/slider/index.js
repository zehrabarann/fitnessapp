import { Button, Carousel, Col, Row } from 'antd'
// import video from "../../assets/fitness.mp4"
import image from "../../assets/sport.jpg"



const Slider = () => {
    return (
        <>
        <div className='bg-[#f8f6f1]'>  
        <Carousel autoplay>
                <div className='slider-text '>
                    <Row className='items-center pb-10 flex-col sm:flex-row justify-center'>
                    
                    <Col span={12} className='top-[45%] max-w-full pb-[30px] sm:max-w-1/2 pb-auto'>
                        <div className='text-4xl text-center items-center sm:text-6xl'>
                            <h3 className='text-black'>Get Fit. Have Fun. <span className='text-[#8B0000]'>REPEAT</span></h3>
                            <Button className=' text-black rounded-xl flex items-center p-[20px] w-auto m-auto mt-[25px]'>Explore Exercise</Button>
                        </div>

                    </Col>

                    <Col span={12} className='flex justify-center max-w-[80%] m-auto sm:max-w-1/2'>
                    <div className='w-[600px] float-right blob '>
                    <img src={image} alt="fitness" className='rounded-bl-[70px] h-[600px] w-full sm:h-auto '/>
                    

                </div>

                    </Col>
                    
                    </Row>
                    
                </div>
                
                
            </Carousel>

        </div>
            

        </>
    )
}

export default Slider