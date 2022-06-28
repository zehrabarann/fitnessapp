import { Button, Carousel, Col, Row } from 'antd'
// import video from "../../assets/fitness.mp4"
import image from "../../assets/sport.jpg"



const Slider = () => {
    return (
        <>
        <div className='bg-[#f8f6f1]'>  
        <Carousel autoplay>
                <div className='slider-text '>
                    <Row className='items-center pb-10'>
                    
                    <Col span={12} className='top-[45%]'>
                        <div className='text-6xl text-center items-center'>
                            <h3 className='text-black'>Get Fit. Have Fun. <span className='text-[#8B0000]'>REPEAT</span></h3>
                            <Button className=' text-black rounded-xl flex items-center p-[20px] w-auto m-auto mt-[25px]'>Explore Exercise</Button>
                        </div>

                    </Col>

                    <Col span={12} className='flex justify-center'>
                    <div className='w-[600px] float-right blob '>
                    <img src={image} alt="fitness" className='rounded-bl-[70px]'/>
                    

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