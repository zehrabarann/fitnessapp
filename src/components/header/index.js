import { Col, Menu, Row } from "antd"
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ShoppingOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
//import axios from "axios"

import logo from "../../assets/muscle2.png"
import Search from "antd/lib/input/Search";

const Header = () => {

    // const onSearch = (e) => {
    //     console.log(e.target.value);

    // }

    return (
        <>
            <Row justify="center" align="top" className="p-[20px] bg-[#f8f6f0]">
                <Col span={2}>
                    <Link to="/">
                        {/* <Logo /> */}
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
                </Col>

            </Row>
        </>
    )
}

export default Header