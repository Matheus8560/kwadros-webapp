import React, { useState } from 'react';

import { Container, ButtonPrimary} from './styles';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { MdHome, MdCreditCard } from 'react-icons/md';


export default function Footer() {

    const [drawerPedido, setDrawerPedido] = useState(false);

    function handleDrawerOpen() {
    setDrawerPedido(true);
    }

    function handleDrawerClose() {
    setDrawerPedido(false);
    }

    return(
        <Container>
            <ButtonPrimary onClick={handleDrawerOpen} className="btn">Fechar Pedido</ButtonPrimary>

            <Drawer 
                variant="temporary"
                anchor="right"
                open={drawerPedido}
                onClose={handleDrawerClose}
            >
                <div className="menu-drawer">
                    <div className="order-title">Fechar Pedido</div>
                    <Divider/>
                    
                    <div className="button-order">
                        <div><MdHome size={25} color="#7159c1"/></div>
                        <div className="text-bold">Adicionar Endereço</div>
                    </div>
                    
                    <div className="button-order">
                        <div><MdCreditCard size={25} color="#7159c1"/></div>
                        <div className="text-bold">Forma de Pagamento</div>
                    </div>
                    <Divider/>

                    <div className="order-sumary">
                        <div className="sumary-item">
                            <div className="title">3 Quadros por R$??,??</div>
                            <div className="value">R$??,??</div>
                        </div>
                        <div className="sumary-item">
                            <div className="title">Mais 1 quadro</div>
                            <div className="value">R$??,??</div>
                        </div>
                        <div className="sumary-item">
                            <div className="title">Frete</div>
                            <div className="value">R$??,??</div>
                        </div>
                        <div classname="total strong">
                            <div className="title">Total</div>
                            <div className="value">R$??,??</div>
                        </div>
                    </div>  
                    <ButtonPrimary onClick={handleDrawerClose} className="btn">Fechar Pedido</ButtonPrimary>  
                </div>

            </Drawer>
        </Container>
    )
}