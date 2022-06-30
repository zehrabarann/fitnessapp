import { Col, Menu, Row } from "antd"
import { Link } from 'react-router-dom';
import logo from "../../assets/muscle2.png"

const Header = () => {


    return (
        <>
            <Row justify="center" align="top" className="p-[20px] bg-[#f8f6f0]">
                <Col span={2}>
                    <Link to="/">
                        <img src={logo} alt="logo" className="h-[45px]" />
                    </Link>
                </Col>
                <Col span={22} className='bg-[#f8f6f0] pl-5 sm:pl-auto'>
                    <Menu mode="horizontal" defaultSelectedKeys={['mail']} className='bg-[#f8f6f0] text-black'>
                        <Menu.Item key="mail" className="text-black hover:text-black">
                            Home
                        </Menu.Item>
                        <Menu.Item key="mail2" className="text-black" onClick={() =>  window.scrollTo({ top: 1600, left: 100, behavior: 'smooth' })}>
                            Exercises
                        </Menu.Item>
                    </Menu>

                </Col>

            </Row>
        </>
    )
}

export default Header