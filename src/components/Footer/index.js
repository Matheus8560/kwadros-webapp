import React, { useState } from 'react';

import { 
    Container, 
    ButtonPrimary, 
    MenuDrawer, 
    OrderTitle,
    ButtonOrder,
    SumaryItem, Total, Bottombutton
} from './styles';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { MdHome, MdCreditCard, MdPerson } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import viaCep from '../../services/viaCep';


export default function Footer() {

    const [drawerPedido, setDrawerPedido] = useState(false);
    const [DialogDados, setDialogDados] = useState(false);
    const [DialogEndereco, setDialogEndereco] = useState(false);
    const [DialogPagamento, setDialogPagamento] = useState(false);
    const [field, setField] = useState({
        nome: '',
        email: '',
        telefone: '',
        cep: '',
        endereco: '',
        numero: '',
        cidade: '',
        estado: '',
        bairro: '',
        complemento: '',
        numCard: '',
        validade: '',
        cvc: '',
    });

    const handleChange = (event) => {
        const target = event.target;
        const {name, value} = target;
        setField({ ...field, [name]:value });
    }

    function handleDrawer() {
        setDrawerPedido(!drawerPedido);
    }

    function handleDialogDados() {
        setDialogDados(!DialogDados);
    }
    function handleDialogEndereco() {
        setDialogEndereco(!DialogEndereco);
    }
    function handleDialogPagamento() {
        setDialogPagamento(!DialogPagamento);
    }

    return(
        <Container>
            <ButtonPrimary onClick={handleDrawer} className="btn">Fechar Pedido</ButtonPrimary>

            <Drawer 
                variant="temporary"
                anchor="right"
                open={drawerPedido}
                onClose={handleDrawer}
            >
                <MenuDrawer>
                    <OrderTitle>Fechar Pedido</OrderTitle>

                    <ButtonOrder onClick={handleDialogDados}>
                        <div style={{margin: '0 25px 0 8px'}}><MdPerson size={25} color="#7159c1"/></div>
                        <div style={{marginTop: '5px'}} className="TextBold">
                            {(field.nome == '') ? 
                                <p>Dados Pessoais</p>
                                : field.nome
                            }
                        </div>
                    </ButtonOrder>
                    
                    <ButtonOrder onClick={handleDialogEndereco}>
                        <div style={{margin: '0 25px 0 8px'}}><MdHome size={25} color="#7159c1"/></div>
                        <div style={{marginTop: '5px'}} className="TextBold">
                            {(field.endereco == '') ? 
                                <p>Adicionar Endereço</p>
                                : field.endereco
                            }
                        </div>
                    </ButtonOrder>
                    
                    <ButtonOrder onClick={handleDialogPagamento}>
                        <div style={{margin: '0 25px 0 8px'}}><MdCreditCard size={25} color="#7159c1"/></div>
                        <div style={{marginTop: '5px'}} className="TextBold">Forma de Pagamento</div>
                    </ButtonOrder>

                    <div className="OrderSumary">
                        <Divider/>
                        <SumaryItem>
                            <div className="ItemTitle">3 Quadros por R$??,??</div>
                            <div className="ItemValue">R$??,??</div>
                        </SumaryItem>
                        <SumaryItem>
                            <div className="ItemTitle">Mais 1 quadro</div>
                            <div className="ItemValue">R$??,??</div>
                        </SumaryItem>
                        <SumaryItem>
                            <div className="ItemTitle">Frete</div>
                            <div className="ItemValue">R$??,??</div>
                        </SumaryItem>
                        <Total>
                            <div className="TotalTitle">Total</div>
                            <div className="TotalValue">R$??,??</div>
                        </Total>
                    </div>  
                    
                    <Bottombutton>
                        <ButtonPrimary onClick={handleDrawer} className="btn">Comprar</ButtonPrimary>  
                    </Bottombutton>
                </MenuDrawer>

            </Drawer>
            <Dialog  open={DialogDados} onClose={handleDialogDados}>
                <div style={{width: "500px"}}>
                    <DialogTitle>Dados Pessoais</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField
                                autoFocus
                                margin="dense"
                                value={field.nome}
                                onChange={handleChange}
                                name="nome"
                                label="Nome"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.email}
                                onChange={handleChange}
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.telefone}
                                onChange={handleChange}
                                name="telefone"
                                label="Telefone"
                                fullWidth
                            />
                        </form>
                    </DialogContent>
                    
                    <DialogActions style={{paddingTop: "30px"}}>
                        <Button onClick={handleDialogDados} color="primary">
                            Confirmar
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>

            <Dialog  open={DialogEndereco} onClose={handleDialogEndereco}>
                <div style={{width: "500px"}}>
                    <DialogTitle>Endereço</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField
                                autoFocus
                                margin="dense"
                                value={field.cep}
                                onChange={handleChange}
                                onBlur={valor => viaCep(valor, setField, field)}
                                name="cep"
                                label="Cep"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.endereco}
                                onChange={handleChange}
                                name="endereco"
                                label="Endereço"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.numero}
                                onChange={handleChange}
                                name="numero"
                                label="Número"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.complemento}
                                onChange={handleChange}
                                name="complemento"
                                label="Complemento"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.estado}
                                onChange={handleChange}
                                name="estado"
                                label="Estado"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.cidade}
                                onChange={handleChange}
                                name="cidade"
                                label="Cidade"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.bairro}
                                onChange={handleChange}
                                name="bairro"
                                label="Bairro"
                                fullWidth
                            />
                        </form>
                    </DialogContent>
                    
                    <DialogActions style={{paddingTop: "30px"}}>
                        <Button onClick={handleDialogEndereco} color="primary">
                            Confirmar
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        
            <Dialog  open={DialogPagamento} onClose={handleDialogPagamento}>
                <div style={{width: "500px"}}>
                    <DialogTitle>Dados do Cartão</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField
                                autoFocus
                                margin="dense"
                                value={field.numCard}
                                onChange={handleChange}
                                name="NumCard"
                                label="Numero do cartão"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.validade}
                                onChange={handleChange}
                                name="validade"
                                label="Validade (MM/AA)"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.cvc}
                                onChange={handleChange}
                                name="cvc"
                                label="CVC"
                                fullWidth
                            />
                        </form>
                    </DialogContent>
                    
                    <DialogActions style={{paddingTop: "30px"}}>
                        <Button onClick={handleDialogPagamento} color="primary">
                            Confirmar
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </Container>
    )
}