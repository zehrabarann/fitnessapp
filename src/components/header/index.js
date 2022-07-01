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
                    <Menu mode="horizontal" defaultSelectedKeys={['home']} className='bg-[#f8f6f0] text-black'>
                        <Link to="/">
                            <Menu.Item key="home" className="text-black hover:text-black">
                                Home
                            </Menu.Item>
                        </Link>
                        <Link to="/" onClick={() => window.innerWidth > 900 ?
                            window.scrollTo({ top: 1560, left: 100, behavior: 'smooth' }) :
                            window.scrollTo({ top: 1760, left: 100, behavior: 'smooth' })}>
                            <Menu.Item key="exercises" className="text-black" >
                                Exercises
                            </Menu.Item>
                        </Link>
                    </Menu>
                </Col>
            </Row>
        </>
    )
}

export default Header