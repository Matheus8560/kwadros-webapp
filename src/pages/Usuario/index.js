import React, { useState, useEffect, Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FaRegTrashAlt, FaPlus } from 'react-icons/fa';
import { AiOutlinePlus } from "react-icons/ai";

import GlobalStyle from '../../styles/global';
import { Container, Content, UserRegisterBtn, DialogContainer } from './styles';

import Loader from '../../components/Loader';
import HeaderAdm from '../../components/HeaderAdm';

import api from '../../services/api';

export default function Sobre() {

    const [loading, setLoading] = useState(true);
    const [DialogRegister, setDialogRegister] = useState(false);

    function handleDialogRegister() {
        setDialogRegister(!DialogRegister);
    }

    // DEFININDO COLUNAS
    const [ columns, setColumns ] = useState([
        {
            key: "name",
            text: "Nome",
            className: "name",
            align: "left",
            sortable: true,
        },
        {
            key: "email",
            text: "E-mail",
            className: "email",
            align: "left",
            sortable: true
        },
        {
            key: "action",
            text: "Action",
            className: "action",
            width: 200,
            align: "left",
            sortable: false,
            cell: record => { 
                return (
                    <Fragment>
                        <button 
                            className="btn btn-danger" 
                            onClick={() => deleteRecord(record)}>
                           <FaRegTrashAlt />
                        </button>
                    </Fragment>
                );
            }
        }
    ]);

    const [config, setConfig] = useState({
        page_size: 5,
        length_menu: [ 5, 10, 15, 20 ],
        button: {
            excel: false,
            print: false,
            extra: true,
        },
        show_length_menu: false,
        show_first: false,
        show_last: false,
        show_info: false
    });

    const [extraButtons, setExtraButtons] = useState([
        {
            className:"btn btn-primary",
            title:"Adicionar Novo",
            children:[
                <span>
                    <FaPlus /> Cadastrar Novo
                </span>
            ],
            onClick:(event)=>{
                setDialogRegister(true)
            },
        },
    ])

    const [records, setRecords] = useState([]);

    useEffect(() => {
        loadUsers();
        setTimeout(() => setLoading(false), 100)
    }, []);

    async function loadUsers(){
        try {
            const response = await api.get('/users');
            
            setRecords(response.data);

        } catch(error){
            // Notifications('error', error.response.data.error);
            setLoading(false);
        } 
    }


    const deleteRecord = async record => {
        setLoading(true);
        try {
            await api.delete(`/users/${record._id}`);

            loadUsers();
            
            // Notifications('success', 'Cliente Deletado com Sucesso!');
            
            setLoading(false)

        } catch(error){
            // Notifications('error', error.response.data.error);
            setLoading(false);
        }
        
    }

    if(loading) return <Loader />

    return (
        <Container>
            <HeaderAdm />
            <Content>

                <article>
                    <ReactDatatable
                        config={config}
                        records={records}
                        columns={columns}
                        extraButtons={extraButtons}
                    />
                </article>

                <Dialog  open={DialogRegister} onClose={handleDialogRegister}>
                    <DialogContainer>
                        <DialogTitle>Novo Usuário</DialogTitle>
                        <DialogContent>
                            
                            <TextField
                                autoFocus
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions style={{paddingTop: "30px"}}>
                            <Button onClick={handleDialogRegister} color="primary">
                                Cadastar
                            </Button>
                        </DialogActions>
                    </DialogContainer>
                </Dialog>
            </Content>
            <GlobalStyle />
        </Container>
    );
}