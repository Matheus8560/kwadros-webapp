import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MdHome, MdCreditCard, MdPerson, MdCheckCircle, MdLocalParking } from 'react-icons/md';
import { ImBarcode } from "react-icons/im";
import pagarme from 'pagarme';

import { 
    Container, 
    ButtonPrimary, 
    MenuDrawer, 
    OrderTitle,
    ButtonOrder,
    SumaryItem, 
    Total, 
    Bottombutton,
    Payment,
    PaymentTitle,
    PaymentItem,
    DialogContainer
} from './styles';

import { addLoadingCart } from '../../store/modules/cart/actions';

import api from '../../services/api';
import viaCep from '../../services/viaCep';
import { Notifications } from '../Notifications';

require('dotenv').config();

export default function Footer() {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart.items);
    const uploads = useSelector(state => state.cart.uploads);

    const [drawerPedido, setDrawerPedido] = useState(false);
    const [DialogDados, setDialogDados] = useState(false);
    const [DialogEndereco, setDialogEndereco] = useState(false);
    const [DialogPagamento, setDialogPagamento] = useState(false);
    const [DialogCartao, setDialogCartao] = useState(false);
    const [field, setField] = useState({
        nome: '',
        email: '',
        cpf: '',
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
    const [method, setMethod] = useState('');

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
    function handleDialogCartao() {
        setMethod('CARD');
        setDialogCartao(!DialogCartao);
    }

    // REALIZA O PAGAMENTO
    async function handleSubmit(){
        dispatch(addLoadingCart(true));

        if(uploads.length >= 3){
            switch (method) {
                case 'CARD':
                    // Fazer Validação aqui
    
                    // DEU CERTO VALIDAÇÃO:
                    handleCard();
                    dispatch(addLoadingCart(false));
                    break;
                case 'TICKET':
                    // Fazer Validação aqui
                    // DEU CERTO VALIDAÇÃO:
                    handleTicket();
                    dispatch(addLoadingCart(false));
                    break;
                default:
                    Notifications('warning', 'Selecione o meio de pagamento: Boleto ou Cartão')
                    dispatch(addLoadingCart(false));
                    break;
            }
            
        } else {
            Notifications('warning', 'Você precisa selecionar no minimo 3 imagens');
            dispatch(addLoadingCart(false));
        }
        
    }

    // ENVIA FOTO AO SERVIDOR
    async function processUpload(files){       
        const data = new FormData();

        data.append('file', files.file);
        data.append('framer', files.framer);
        data.append('status', files.status);
        data.append('order_id', files.order_id);

        try {
            const response = await api.post('/uploads', data);

           console.log(response)

        } catch(err){
           console.log(err.message)
            
        }
        
    }

    const isEmpty = obj => {
        let state = false;
        for(var prop in obj) {
            if(obj[prop] == '' || obj[prop] == [] || obj[prop] == {})  state = true;
        }
        return state;
    }
    // CARTÃO DE CRÉDITO: PAGARME
    async function handleCard(){
        if(!isEmpty({ ...field, complemento: '*'})){
            const data = { ...field };

            try {
                const client = await pagarme.client.connect({
                    encryption_key: process.env.REACT_APP_PAGARME_ENCRYPTION_KEY
                });
        
                const card_hash = await client.security.encrypt({
                    card_holder_name: data.nome,
                    card_number: data.numCard,
                    card_expiration_date: data.validade,
                    card_cvv: data.cvc,
                });
        
                delete data.numCard;
                delete data.validade;
                delete data.cvc;
        
                setField(data);

                const response = await api.post('/payments/cards', { ...data, card_hash});
                
                // Faz o Upload
                uploads.forEach(files => processUpload({
                    file: files.file, 
                    order_id: response.data.order_id,
                    framer: cart.kit_name, 
                    status: 'waiting_payment'
                }));

                // Pedido na YAMPI
                await api.post('/orders', {
                    ...cart,
                    status: 'waiting_payment',
                    address: {
                        street: field.endereco,
                        number: field.numero,
                        neighborhood: field.bairro,
                        complement: field.complemento,
                        reference: field.nome,
                        zipcode: field.cep,
                        city: field.cidade,
                        uf: field.estado,
                    },
                    installments: 1,
                    method: 9,
                    name: field.nome,
                    email: field.email,
                    phone: field.telefone,
                    cpf: String(field.cpf),
                    // ticket_code: response.data.bank_slip.digitable_line,
                    days_delivery: 22,
                    value_total: parseFloat(cart.price_unity * cart.quantity + cart.kit_price),
                    order_id: response.data.order_id,

                });
            
                Notifications('success', 'Seu pedido foi realizado com sucesso.');
            } catch(err){
                Notifications('error', 'Erro ao realizar pedido');
            }
        } else {
            Notifications('error', 'Por favor, preencha todos os dados solicitados.');
        }
        
    }

    // BOLETO BANCÁRIO: PAGHIPER
    async function handleTicket(){
        dispatch(addLoadingCart(true));
        const data = { ...field };

        delete data.numCard;
        delete data.validade;
        delete data.cvc;

        setField(data);

        if(!isEmpty({ ...data, complemento: '*'})){
            try {
                const response = await api.post('/payments/tickets', {
                    name: field.nome,
                    email: field.email,
                    cpf: field.cpf,
                    ...cart,
                    address: {
                        street: field.endereco,
                        number: field.numero,
                        neighborhood: field.bairro,
                        complement: field.complemento,
                        reference: field.name,
                        zipcode: field.cep,
                        city: field.cidade,
                        uf: field.estado,
                    },
                    phone: field.telefone,
                });
                
                // Faz o Upload
                uploads.forEach(files => processUpload({
                    file: files.file, 
                    order_id: response.data.order_id,
                    framer: cart.kit_name, 
                    status: 'waiting_payment'
                }))
            

                // Pedido na YAMPI
                await api.post('/orders', {
                    ...cart,
                    status: 'waiting_payment',
                    address: {
                        street: field.endereco,
                        number: field.numero,
                        neighborhood: field.bairro,
                        complement: field.complemento,
                        reference: field.nome,
                        zipcode: field.cep,
                        city: field.cidade,
                        uf: field.estado,
                    },
                    installments: 1,
                    method: 9,
                    name: field.nome,
                    email: field.email,
                    phone: field.telefone,
                    cpf: String(field.cpf),
                    // ticket_code: response.data.bank_slip.digitable_line,
                    days_delivery: 22,
                    value_total: parseFloat(cart.price_unity * cart.quantity + cart.kit_price),
                    order_id: response.data.order_id,

                });
                
                // Redireciona pro boleto
            
                window.location.href = response.data.bank_slip.url_slip_pdf;
                
            } catch (err){
                Notifications('error', 'Erro ao realizar pedido');
                dispatch(addLoadingCart(false));
            }
        } else {
            Notifications('error', 'Por favor, preencha todos os dados solicitados.');
            dispatch(addLoadingCart(false));
        }
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
                        <div style={{marginTop: '5px'}} className="TextBold">Adicionar Dados Pessoais</div>
                    </ButtonOrder>
                    
                    <ButtonOrder onClick={handleDialogEndereco}>
                        <div style={{margin: '0 25px 0 8px'}}><MdHome size={25} color="#7159c1"/></div>
                        <div style={{marginTop: '5px'}} className="TextBold">Adicionar Endereço</div>
                    </ButtonOrder>

                    <PaymentTitle>Formas de Pagamento</PaymentTitle>
                    <Payment>

                        <PaymentItem onClick={() => setMethod('TICKET')}>
                            <div style={{margin: '0 25px 0 8px'}}><ImBarcode size={25} color="#7159c1"/></div>
                            <div style={{marginTop: '5px'}} className="TextBold">Boleto</div>
                            {method === "TICKET" && (<MdCheckCircle size={20} color="#59c179" style={{alignSelf: 'flex-end', marginLeft: '4%' }}/>)}
                        </PaymentItem>

                        <PaymentItem onClick={() => { 
                             setMethod('CARD');
                             setDialogCartao(!DialogCartao);
                        }}>
                            <div style={{margin: '0 25px 0 8px'}}><MdCreditCard size={25} color="#7159c1"/></div>
                            <div style={{marginTop: '5px'}} className="TextBold">Cartão</div>
                            {method === "CARD" && (<MdCheckCircle size={20} color="#59c179" style={{alignSelf: 'flex-end', marginLeft: '4%' }}/>)}
                        </PaymentItem>

                    </Payment>

                    <div className="OrderSumary">
                        <Divider/>
                        <SumaryItem>
                            <div className="ItemTitle">{cart.quantity} Quadro{cart.quantity > 1 && 's'}</div>
                            <div className="ItemValue">R$ {parseFloat(cart.price).toFixed(2)}</div>
                        </SumaryItem>
                        <SumaryItem>
                            <div className="ItemTitle">Frete</div>
                            <div className="ItemValue">Grátis</div>
                        </SumaryItem>
                        <Total>
                            <div className="TotalTitle">Total</div>
                            <div className="TotalValue">R$ {(!cart.quantity) ? cart.price.toFixed(2) : (cart.price * cart.quantity).toFixed(2)}</div>
                        </Total>
                    </div>  
                    
                    <Bottombutton>
                        <ButtonPrimary style={{width: '100%'}} onClick={() => handleSubmit()} className="btn">Comprar</ButtonPrimary>  
                    </Bottombutton>
                </MenuDrawer>

            </Drawer>
            <Dialog  open={DialogDados} onClose={handleDialogDados}>
                <DialogContainer>
                    <form>
                        <DialogTitle>Dados Pessoais</DialogTitle>
                        <DialogContent>
                            
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
                                value={field.cpf}
                                onChange={handleChange}
                                name="cpf"
                                label="CPF"
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
                        
                        </DialogContent>
                        
                        <DialogActions style={{paddingTop: "30px"}}>
                            <Button onClick={handleDialogDados} color="primary">
                                Confirmar
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContainer>
            </Dialog>

            <Dialog  open={DialogEndereco} onClose={handleDialogEndereco}>
                <DialogContainer>
                    <form>
                        <DialogTitle>Endereço</DialogTitle>
                        <DialogContent>
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
                        </DialogContent>
                        
                        <DialogActions style={{paddingTop: "30px"}}>
                            <Button onClick={handleDialogEndereco} color="primary">
                                Confirmar
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContainer>
            </Dialog>
            
            <Dialog  open={DialogCartao} onClose={handleDialogCartao}>
                <DialogContainer>
                    <form>
                        <DialogTitle>Dados do Cartão</DialogTitle>
                        <DialogContent>
                            
                            <TextField
                                autoFocus
                                margin="dense"
                                value={field.numCard}
                                onChange={handleChange}
                                name="numCard"
                                label="Numero do cartão"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                value={field.nomeTitular}
                                onChange={handleChange}
                                name="nomeTitular"
                                label="Nome do titular"
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

                        </DialogContent>
                        <DialogActions style={{paddingTop: "30px"}}>
                            <Button onClick={handleDialogCartao} color="primary">
                                voltar
                            </Button>
                            <Button onClick={handleDialogCartao} color="primary">
                                Confirmar
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContainer>
            </Dialog>
        </Container>
    )
}