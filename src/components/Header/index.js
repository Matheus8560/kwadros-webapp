import React from 'react';

import { Container, Img, ArrowBtn } from './styles';

import logo from '../../assets/logo-white.png';

import { MdArrowBack } from 'react-icons/md';

const Header = () => (
    <Container>
        <ArrowBtn><MdArrowBack size={25} color="#FFFFFF"/></ArrowBtn>
        <Img src={logo} />
        <div></div>
    </Container>
);

export default Header;