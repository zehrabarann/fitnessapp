import { Card } from "antd"

const Cards = ({ gifUrl, bodyPart, target, name }) => {
    return (
        <>
            <Card
                hoverable bordered className='w-auto h-[500px] shadow-indigo-500/40 '
                cover={<img alt="example" className='h-[325px] object-contain ' src={gifUrl} />}
            >
                <div className=' py-0'>
                    <span className='p-[8px] bg-indigo-800 mr-[15px] text-white rounded-full'>{bodyPart}</span>
                    <span className='p-[8px] bg-indigo-800 text-white rounded-full'>{target}</span>
                </div>
                <div className='mt-8'>
                    <span className='text-3xl font-bold mt-5'>{name}</span>
                </div>
            </Card>
        </>
    )
}

export default Cards