import { Typography, Card, Carousel } from "antd";
import axios from "axios";
import { useEffect, useState, memo } from "react"
import { settings } from "../../constant";
import { ClockCircleOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import Modal from "../modal";
const { Title } = Typography;

const SameNameExcercises = (props) => {

    const [sameNameExercises, setSameNameExercises] = useState([])

    const [isModalVisible, setIsModalVisible] = useState({
        show: false,
        data: {}
    });

    const showModal = (data) => {
        setIsModalVisible({ show: true, data: data });
    };

    const handleCancel = () => {
        setIsModalVisible({ show: false, data: {} });
    };

    useEffect(() => {
        if (sameNameExercises.length === 0) {

            const options = {
                method: 'GET',
                url: 'https://simple-youtube-search.p.rapidapi.com/search',
                params: { query: props.name, safesearch: 'false' },
                headers: {
                    'X-RapidAPI-Key': '353dd5be6bmshac39218188ef976p175739jsn228b74389843',
                    'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
                }
            };
            axios.request(options).then(function (response) {
                setSameNameExercises(response.data.results)
                console.log('Youtube2', response.data);
            }).catch(function (error) {
                console.error(error);
            });

        }

    }, [sameNameExercises, props])

    if (!Array.isArray(sameNameExercises)) {
        return (
            <span>Loading</span>
        )
    }
    return (
        <>
            <div className="h-[480px] w-11/12 m-auto ">
                <h3 className="text-3xl font-semibold">Watch <span>{props.name} </span>exercise videos</h3>
                <Carousel {...settings} arrows={true} draggable={true} className='my-5'>
                    {
                        sameNameExercises.map((element) => {
                            return (
                                <div key={element.id} className='p-2'>
                                    <Card
                                        title={<>
                                            <div>
                                                <img src={element.thumbnail.url} alt={element.title} />
                                            </div>
                                        </>}
                                        bordered={false}
                                        onClick={() => showModal(element)}
                                    >
                                        <Title level={4} className='sameNameTitle h-[57px] '>{element.title}</Title>
                                        <div>
                                            <span className="flex items-center">
                                                <ClockCircleOutlined /> <span className="pl-2 pr-2">:</span> {element.uploadedAt}
                                            </span>
                                            <div className="flex flex-row mt-1">
                                            <span className="flex items-center">
                                                <LikeOutlined /> <span className="pl-2 pr-2">:</span> {element.ratings.likes}
                                            </span>
                                            <span className="flex items-center ml-5">
                                                <DislikeOutlined /> <span className="pl-2 pr-2">:</span> {element.ratings.dislikes}
                                            </span>

                                            </div>
                                            
                                        </div>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Carousel>
                <Modal isModalVisible={isModalVisible.show} thumbnail={isModalVisible.data.thumbnail} title={isModalVisible.data.title} handleCancel={handleCancel}>
                    
                    <iframe width={isModalVisible.data.thumbnail?.width} height={isModalVisible.data.thumbnail?.height}  src={`https://www.youtube.com/embed/${isModalVisible.data.url?.split('=')[1]}`} title="3/4 Sit-Up" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal>
                
            </div>
        </>
    )

}

export default memo(SameNameExcercises)