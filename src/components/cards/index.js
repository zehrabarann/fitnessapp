import { Card } from "antd"

const Cards = ({ gifUrl, bodyPart, target, name, equipment }) => {
    return (
        <>
            <Card
                hoverable bordered className='w-auto h-[380px] shadow-indigo-500/40 md:h-[500px] '
                cover={<img alt="example" className='h-[210px] object-contain cursor-pointer md:h-[325px]' src={gifUrl} />}
            >
                <div className=' py-0'>
                    <span className='p-[8px] bg-indigo-800 mr-[15px] text-white rounded-full'>{bodyPart}</span>
                    <span className='p-[8px] bg-indigo-800 text-white rounded-full'>{target}</span>
                </div>
                <div className='mt-6 capitalize'>
                    <span className='text-2xl font-bold mt-5'>{name}</span>
                </div>
                <div className='mt-6 capitalize'>
                    <span className='text-2xl font-bold mt-5'>{equipment}</span>
                </div>
            </Card>
        </>
    )
}

export default Cards