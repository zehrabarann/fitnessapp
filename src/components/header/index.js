import { Col, Menu, Row } from "antd"
import Search from "antd/lib/input/Search";
import { Link } from 'react-router-dom';
import logo from "../../assets/muscle2.png"

const Header = () => {

    const onSearch = (value: string) => console.log(value);

    return (
        <>
            <Row justify="center" align="top" className="p-[20px] bg-[#f8f6f0]">
                <Col span={2}>
                    <Link to="/">
                        <img src={logo} alt="logo" className="h-[45px]" />
                    </Link>
                </Col>
                <Col span={22} className='bg-[#f8f6f0]'>
                    <Menu mode="horizontal" defaultSelectedKeys={['mail']} className='bg-[#f8f6f0] text-black'>
                        <Menu.Item key="mail" className="text-black">
                            Home
                        </Menu.Item>
                        <Menu.Item key="mail2" className="text-black">
                            Exercises
                        </Menu.Item>
                    </Menu>

                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />

                </Col>

            </Row>
        </>
    )
}

export default Header