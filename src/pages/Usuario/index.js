import React, { useState, useEffect } from 'react';

import GlobalStyle from '../../styles/global';
import { Container, Content, UserRegisterBtn, DialogContainer } from './styles';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import HeaderAdm from '../../components/HeaderAdm';

import { AiOutlinePlus } from "react-icons/ai";


export default function Sobre() {

    const [DialogRegister, setDialogRegister] = useState(false);

    function handleDialogRegister() {
        setDialogRegister(!DialogRegister);
    }

    return (
        <Container>
            <HeaderAdm />
            <Content>

                <UserRegisterBtn onClick={handleDialogRegister}>
                    <AiOutlinePlus /> Cadastra Novo
                </UserRegisterBtn>

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