import React, { useState } from 'react';

import { Container, Img, TopMenu, MenuItens, MenuMobile, MenuDrawerBtn, MenuMobileItens} from './styles';

import logo from '../../assets/logo-white.png';

import Drawer from '@material-ui/core/Drawer';

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

                <Drawer 
                    variant="temporary"
                    anchor="right"
                    open={mobileMenu}
                    onClose={handleMobileMenu}
                >

                    
                        <MenuDrawerBtn onClick={ e => handleMenu("usuario") }>
                            <MenuMobileItens type={selected === 'usuario' ? "active" : ""}> Usuario </MenuMobileItens>
                        </MenuDrawerBtn>

                        <MenuDrawerBtn onClick={ e => handleMenu("pedidos") }>
                            <MenuMobileItens type={selected === 'pedidos' ? "active" : ""}> Pedidos </MenuMobileItens>
                        </MenuDrawerBtn>

                        <MenuDrawerBtn onClick={ e => handleMenu("sair") }>
                            <MenuMobileItens type={selected === 'sair' ? "active" : ""}> Sair</MenuMobileItens>
                        </MenuDrawerBtn>
                    

                </Drawer>

            </TopMenu>
        </Container>
    )
};