import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button"
import {observer} from "mobx-react-lite"


const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><NavLink style={{ color: 'wheat' }} to={SHOP_ROUTE}>СитиЛайн</NavLink></Navbar.Brand>
                {user.isAuth ?
                    <Nav className="me-auto">
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button variant={"outline-light"} className="ms-2">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="me-auto">
                        <Button variant={"outline-light"} onClick={()=>user.setIsAuth(true)}>Вход</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;