import React from 'react';

import { Container, Img} from './styles';

import logo from '../../assets/logo-white.png';

const Header = () => (
    <Container>
        <Img src={logo} />
    </Container>
);

export default Header;