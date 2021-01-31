import React, { useState } from 'react';

import { Container, Img, TopMenu, MenuItens, MenuMobile} from './styles';

import logo from '../../assets/logo-white.png';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { AiOutlineMenu } from "react-icons/ai";

export default function HeaderAdm() {

    const [selected, setSelected] = useState('usuario');
    const [mobileMenu, setMobileMenu] = useState(false);

    function handleMenu(option) {
        setSelected(option)
    }
    function handleMobileMenu() {
        setMobileMenu(!mobileMenu)
    }    
    
    return(    
        <Container>
            <Img src={logo}/>
            <TopMenu>

                <MenuItens type={selected === 'usuario' ? "active" : ""} onClick={ e => handleMenu("usuario") }>
                    Usuario 
                </MenuItens>

                <MenuItens type={selected === 'pedidos' ? "active" : ""} onClick={ e => handleMenu("pedidos") }>
                    Pedidos 
                </MenuItens>

                <MenuItens type={selected === 'sair' ? "active" : ""} onClick={ e => handleMenu("sair") }>
                    Sair
                </MenuItens>

                <MenuMobile onClick={handleMobileMenu}>
                    <AiOutlineMenu size={25} color="#FFFFFF"/>
                </MenuMobile>

                <Menu
                    anchorEl={mobileMenu}
                    keepMounted
                    open={Boolean(mobileMenu)}
                    onClose={handleMobileMenu}
                >
                    <MenuItem onClick={handleMobileMenu}>
                        Usuario
                    </MenuItem>
                    <MenuItem onClick={handleMobileMenu}>
                        Pedidos
                    </MenuItem>
                    <MenuItem onClick={handleMobileMenu}>
                        Sair
                    </MenuItem>
                </Menu>


            </TopMenu>
        </Container>
    )
};